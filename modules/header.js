export function LoadAnyHeader(){
    if(localStorage.getItem('pseudotoken') == null){
        LoadHeaderNoLogged();
    }
    else{
        LoadHeaderLogged();
    }
}

function LoadHeader(li3, li4){
    const header = document.createElement('header');

    const a = document.createElement('a');
    a.setAttribute('href', 'https://cdn.discordapp.com/attachments/945837265593192499/1164992910425595974/1697826347808.jpg?ex=65453b32&is=6532c632&hm=a7fa6195635aca6e7fbde2d2a63060129a264bf043ac0a63ba1a3e8bb41dcc79&')
    
    const img = document.createElement('img');
    if(document.title == 'Home'){
        img.src = 'assets/KAI_WALK.gif';
    }else{
        img.src = './../assets/KAI_WALK.gif';
    }
    

    a.appendChild(img);

    const ul = document.createElement('ul');

    const li1 = document.createElement('li');
    li1.innerHTML = 'Home';
    li1.addEventListener('click', (e) => {
        e.preventDefault();

        if(document.title == 'Home'){
            location.href = 'index.html';
        }else{
            location.href = './../index.html';
        }
        
    });

    const li2 = document.createElement('li');
    li2.innerHTML = 'Global songs';

    li2.addEventListener('click', (e) => {
        e.preventDefault();
        if(document.title == 'Home'){
            location.href = './html/globalsongs.html';
        }else{
            location.href = './globalsongs.html';
        }
    });

    const a1 = document.createElement('a');
    a1.setAttribute('href', '');
    a1.setAttribute('draggable', 'false');
    a1.classList.add('header-button');

    const imgOptions = document.createElement('img');

    if(document.title == 'Home'){
        imgOptions.src = 'assets/options.png';
    }else{
        imgOptions.src = './../assets/options.png';
    }

    imgOptions.setAttribute('draggable', 'false');
    a1.addEventListener('click', (e) => {
        e.preventDefault();
        modal.OpenModalOptions(); //TODO:
    });

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    a1.appendChild(imgOptions);

    header.appendChild(a);
    header.appendChild(ul);
    header.appendChild(a1);

    const body = document.querySelector('body');
    body.prepend(header);
}

function LoadHeaderNoLogged(){
    const li3 = document.createElement('li');
    li3.innerHTML = 'Log in';

    li3.addEventListener('click', (e) => {
        e.preventDefault();
        if(document.title == 'Home'){
            location.href = './html/login.html';
        }else{
            location.href = './login.html';
        }
    });

    const li4 = document.createElement('li');
    li4.innerHTML = 'Sign up';

    li4.addEventListener('click', (e) => {
        e.preventDefault();
        if(document.title == 'Home'){
            location.href = './html/signup.html';
        }else{
            location.href = './signup.html';
        }
    });
    
    LoadHeader(li3, li4);
}

function LoadHeaderLogged(){
    const li3 = document.createElement('li');
    li3.innerHTML = 'Your songs';

    li3.addEventListener('click', (e) => {
        e.preventDefault();
        if(document.title == 'Home'){
            location.href = './html/yoursongs.html';
        }else{
            location.href = './yoursongs.html';
        }
    });

    const li4 = document.createElement('li');
    li4.innerHTML = 'Sign out';

    li4.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('pseudotoken');
        if(document.title == 'Home'){
            location.href = 'index.html';
        }else{
            location.href = './../index.html';
        }
    });
    
    LoadHeader(li3, li4);
}