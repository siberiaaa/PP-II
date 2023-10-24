import * as footer from "./footer.js";
import * as header from "./header.js";

document.addEventListener("DOMContentLoaded", () => {
    header.LoadAnyHeader();
    footer.LoadFooter();
});

async function LogInAPI(user, pass) {
    const response = await fetch(
        "https://sa-east-1.aws.data.mongodb-api.com/app/musicapp-clxou/endpoint/getUser",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: user, password: pass }),
        }
    );

    if (response.status >= 500 && response.status <= 599) {
        OpenModalErrorReload(`Error con el servidor\n${response.status}`);
        return;
    }

    const data = await response.json();

    if (data["success"]) {
        return data["id"];
    } else {
        OpenModalError(data["message"]);
        return null;
    }
}

async function LogIn(e) {
    e.preventDefault();
    const form = document.querySelector("form");
    const data = new FormData(form);

    const user = data.get("user");
    const pass = data.get("password");

    if (!user || !pass) {
        OpenModalError("Fill all fields");
        return;
    }

    const id = await LogInAPI(email, pass);

    if (id != null) {
        form.reset();
        localStorage.setItem("pseudotoken", id);
        OpenModalButton("Logged in successfully", main.Load);
    }

}
