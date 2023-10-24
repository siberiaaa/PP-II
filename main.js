/*
async function test() {
    const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/musicapp-clxou/endpoint/song",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: "Snow",
                author: "Red Hot Chilli Peppers",
                status: "a",
            }),
        }
    );

    const data = await response.json();
    console.log(data);
}*/

import * as footer from './modules/footer.js';
import * as header from './modules/header.js';


const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    if(localStorage.getItem('pseudotoken') == null){
        location.href = "./html/yoursongs.html";
    }
    else{
        location.href = "./html/yoursongs.html";
    }
});


document.addEventListener('DOMContentLoaded', () => {
    header.LoadAnyHeader();
    footer.LoadFooter();
});