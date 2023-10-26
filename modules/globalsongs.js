import * as footer from "./footer.js";
import * as header from "./header.js";
import * as modals from "./modals.js";

const songsdataArray = [];
let admin = false;

document.addEventListener("DOMContentLoaded", async () => {
    header.LoadAnyHeader();
    footer.LoadFooter();

    const pseudotoken = localStorage.getItem('pseudotoken');

    if(pseudotoken == null){
        LoadSongs();
    }
    else{
        const isadmin = await IsAdminAPI(pseudotoken)
        if (isadmin){
            const label = document.querySelector("label");
            const a = document.createElement('a');
            a.innerHTML = 'Add song';
            label.after(a);

            admin = true;
        }
        LoadSongs();
    }
});
    

async function IsAdminAPI(pseudotoken) {
    const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/musicapp-clxou/endpoint/userAdmin",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id: pseudotoken})
        }
    );

    if (response.status >= 500 && response.status <= 599) {
        modals.OpenModalErrorReload(
            `Error con el servidor\n${response.status}`
        );
        return;
    }

    const data = await response.json();

    if (data["success"]) {
        return data["admin"];
    } else {
        modals.OpenModalError(data["message"]);
        return null;
    }
}


async function LoadSongsAPI() {
    const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/musicapp-clxou/endpoint/song",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    if (response.status >= 500 && response.status <= 599) {
        modals.OpenModalErrorReload(
            `Error con el servidor\n${response.status}`
        );
        return;
    }

    const data = await response.json();

    if (data["success"]) {
        return [...data["songs"]];
    } else {
        modals.OpenModalError(data["message"]);
        return null;
    }
}

async function LoadSongs() {
    const list = await LoadSongsAPI();

    if (list != null) {
        for (let song of list) {
            AddSongTable(song["_id"], song["name"], song["author"], song["rating"]);
            songsdataArray.push({songid: song["_id"], name: song["name"], author: song["author"], rating: song["rating"]});
        }
    }
}

function AddSongTable(id, name, author, globalrating) {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerHTML = name;

    const td2 = document.createElement("td");
    td2.innerHTML = author;

    const td4 = document.createElement("td");
    td4.innerHTML = globalrating;

    const td5 = document.createElement("td");

    const a1 = document.createElement("a");
    a1.setAttribute("href", "");
    a1.setAttribute("draggable", "false");
    const img1 = document.createElement("img");
    img1.src = "./../assets/add.png";
    img1.setAttribute("draggable", "false");
    a1.appendChild(img1);
    td5.appendChild(a1);

    if(admin){
        const a2 = document.createElement("a");
        a2.setAttribute("href", "");
        a2.setAttribute("draggable", "false");
        const img2 = document.createElement("img");
        img2.src = "./../assets/edit.png";
        img2.setAttribute("draggable", "false");
        a2.appendChild(img2);

        const a3 = document.createElement("a");
        a3.setAttribute("href", "");
        a3.setAttribute("draggable", "false");
        const img3 = document.createElement("img");
        img3.src = "./../assets/trash.png";
        img3.setAttribute("draggable", "false");
        a3.appendChild(img3);

        td5.appendChild(a2);
        td5.appendChild(a3);
    }

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td4);
    tr.appendChild(td5);

    const tbody = document.querySelector("tbody");
    tbody.appendChild(tr);
}


function updateArraySearch(e) {
    const notfound = document.querySelector("#notfound");
    if (notfound != null){
        notfound.remove();
    }

    const search = e.srcElement.value;

    if(songsdataArray.length == 0){
        return;
    }

    const tbody = document.querySelector("tbody");
    
    if(search.length == 0){
        tbody.innerHTML = '';
        for (let song of songsdataArray) {
            AddSongTable(song["songid"], song["name"], song["author"], song["rating"]);
        }
        return;
    }
    
    const filtered = songsdataArray.filter( (e) => e['name'].toLowerCase().includes(search.toLowerCase()) || e['author'].toLowerCase().includes(search.toLowerCase()));
    
    tbody.innerHTML = '';

    if (filtered.length == 0) {
            const a = document.createElement('a');
            a.innerHTML = 'Not found, click to add song';
            a.setAttribute('id', 'notfound')

        const section = document.querySelector("section");
        section.appendChild(a);
        return;
    }

    for (let song of filtered) {
        AddSongTable(song["songid"], song["name"], song["author"], song["rating"]);
    }
}

const searchInput = document.querySelector('input');
searchInput.addEventListener('input', updateArraySearch);


