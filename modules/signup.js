import * as footer from './footer.js';
import * as header from './header.js';
import * as modals from "./modals.js"

document.addEventListener('DOMContentLoaded', () => {
    header.LoadAnyHeader();
    footer.LoadFooter();
});

const buttonSignup = document.querySelector('a.button-form')
buttonSignup.addEventListener('click', (e) => {SignUp(e)}); 

async function SignUpAPI(name, user, pass) {
    const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/musicapp-clxou/endpoint/user",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name, user: user, password: pass }),
        }
    );

    if (response.status >= 500 && response.status <= 599) {
        modals.OpenModalErrorReload(`Error con el servidor\n${response.status}`);
        modals.Report(`Error con el servidor\n${response.status}`);
        return;
    }

    const data = await response.json();

    if (data["success"]) {
        return data["result"]["insertedId"];
    } else {
        modals.OpenModalError(data["message"]);
        modals.Report(data["message"]);
        return null;
    }
}

async function SignUp(e) {
    e.preventDefault();
    
    const form = document.querySelector("form");
    const data = new FormData(form);

    const name = data.get("name");
    const user = data.get("user");
    const pass = data.get("password");

    if (!name || !user || !pass) {
        modals.OpenModalError("Fill all fields");
        modals.Report(`Fill all fields`);
        return;
    }

    modals.SpinnerOn();
    const id = await SignUpAPI(name, user, pass);
    modals.SpinnerOff();

    if (id != null) {
        form.reset();
        localStorage.setItem("pseudotoken", id);
        modals.OpenModalButtonHref("You've signed up successfully", './../index.html');
    }

}