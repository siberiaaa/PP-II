import * as footer from './footer.js';
import * as header from './header.js';
import * as modals from "./modals.js";

document.addEventListener('DOMContentLoaded', () => {
    header.LoadAnyHeader();
    footer.LoadFooter();
    LoadSongs();
});

async function LoadSongsAPI(userid) {
    const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/musicapp-clxou/endpoint/getUserList",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userid: userid}),
        }
    );

    if (response.status >= 500 && response.status <= 599) {
        modals.OpenModalErrorReload(`Error con el servidor\n${response.status}`);
        return;
    }

    const data = await response.json();

    if (data["success"]) {
        return [...data["list"]];
    } else {
        modals.OpenModalError(data["message"]);
        return null;
    }
}

async function GetSongAPI(songid){
    const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/musicapp-clxou/endpoint/getSong",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id: songid}),
        }
    );

    if (response.status >= 500 && response.status <= 599) {
        modals.OpenModalErrorReload(`Error con el servidor\n${response.status}`);
        return;
    }

    const data = await response.json();

    if (data["success"]) {
        return {...data["song"]};
    } else if(data["message"] == 'Song not found'){
        return null;
    }else{
        modals.OpenModalError(data["message"]);
        return null;
    }
}

async function LoadSongs(){
    const pseudotoken = localStorage.getItem('pseudotoken');
    if(localStorage.getItem('pseudotoken') == null){
        modals.OpenModalErrorReload(`You must be logged to perform this action.`);
        return;
    }

    const list = await LoadSongsAPI(pseudotoken);
  
    if (list != null) {
        for (let song of list){
                const songdata = await GetSongAPI(song['songid']);
                if(songdata != null){
                AddSongTable(song['songid'], songdata['name'], songdata['author'], song['rating'], songdata['rating'])
                }
        }
    }

}

function AddSongTable(id, name, author, rating, globalrating){
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.innerHTML = name;

    const td2 = document.createElement('td');
    td2.innerHTML = author;

    const td3 = document.createElement('td');
    if (rating == -1){
        td3.innerHTML = 'None';
    }else{
    td3.innerHTML = rating;
    }
    const td4 = document.createElement('td');
    td4.innerHTML = globalrating;

    const td5 = document.createElement('td');

    const a1 = document.createElement('a');
    a1.setAttribute('href', '');
    a1.setAttribute('draggable', 'false');
    const img1 = document.createElement('img');
    img1.src = './../assets/star.png'; 
    img1.setAttribute('draggable', 'false');
    a1.appendChild(img1);

    const a2 = document.createElement('a');
    a2.setAttribute('href', '');
    a2.setAttribute('draggable', 'false');
    const img2 = document.createElement('img');
    img2.src = './../assets/trash.png'; 
    img2.setAttribute('draggable', 'false');
    a2.appendChild(img2);

    td5.appendChild(a1);
    td5.appendChild(a2);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    const tbody = document.querySelector('tbody');
    tbody.appendChild(tr);
}