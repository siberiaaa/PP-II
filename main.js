import * as footer from './modules/footer.js';
import * as header from './modules/header.js';


const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    if(localStorage.getItem('pseudotoken') == null){
        location.href = "./html/login.html";
    }
    else{
        location.href = "./html/yoursongs.html";
    }
});


document.addEventListener('DOMContentLoaded', () => {
    header.LoadAnyHeader();
    footer.LoadFooter();
});