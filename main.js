const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    test();
});

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
}
