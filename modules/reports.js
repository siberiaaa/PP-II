import * as footer from './footer.js';
import * as header from './header.js';
import * as modals from "./modals.js";


document.addEventListener('DOMContentLoaded', () => {
    header.LoadAnyHeader();
    footer.LoadFooter();
    LoadReports();
});

async function LoadReports(){
    const pseudotoken = localStorage.getItem('pseudotoken');
    if(localStorage.getItem('pseudotoken') == null){
        modals.OpenModalErrorReload(`You must be logged to perform this action.`);
        return;
    }
    
    modals.SpinnerOn();
    const isadmin = await header.IsAdminAPI(pseudotoken)
    modals.SpinnerOff();
        if (!isadmin){
            modals.OpenModalErrorReload(`You must be admin to perform this action.`);
            return;
        }

    modals.SpinnerOn();
    const list = await LoadReportsAPI(pseudotoken);
    modals.SpinnerOff();
  
    if (list != null) {
        for (let report of list){
            let time = ''; 
            try{
                time = new Date(parseInt(report['time'])).toLocaleDateString('en-CA');
            }catch{
                time = 'Invalid format';
            }
                AddReportTable(report['user'], report['log'], time)
                }
        }
    }


async function LoadReportsAPI(userid) {
    const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/musicapp-clxou/endpoint/GetReports",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ pseudotoken: userid}),
        }
    );

    if (response.status >= 500 && response.status <= 599) {
        modals.OpenModalErrorReload(`Error con el servidor\n${response.status}`);
        return;
    }

    const data = await response.json();

    if (data["success"]) {
        return [...data["reports"]];
    } else {
        modals.OpenModalError(data["message"]);
        return null;
    }
}

function AddReportTable(user, log, time){
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.innerHTML = user;

    const td2 = document.createElement('td');
    td2.innerHTML = log;

    const td3 = document.createElement('td');
    td3.innerHTML = time;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    const tbody = document.querySelector('tbody');
    tbody.appendChild(tr);
}