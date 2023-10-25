function CreateModal(){
    const oldModal = document.querySelector('article.modal');
    
    if(oldModal != null){
        oldModal.remove();
    }

    const modal = document.createElement('article');
    modal.classList.add('modal');

    const section = document.createElement('section');
    section.classList.add('modal-content');

    modal.appendChild(section);

    const body = document.querySelector('body');
    body.prepend(modal);
}

export function OpenModalButtonHref(message, href){
    CreateModal();
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.add('messagebox');

    const p = document.createElement('p');
    p.innerHTML = message;
    modalContent.appendChild(p);

    const a = document.createElement('a');
    a.innerHTML = 'Aceptar';
    a.addEventListener('click', () => {
        location.href = href;
        document.documentElement.style.setProperty('--displaymodal', 'none')
    });

    modalContent.appendChild(a);


    document.documentElement.style.setProperty('--displaymodal', 'flex');
}

export function OpenModalAceptarReload(message){
    CreateModal();
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.add('messagebox');

    const p = document.createElement('p');
    p.innerHTML = message;
    modalContent.appendChild(p);

    const a = document.createElement('a');
    a.innerHTML = 'Aceptar';
    a.addEventListener('click', () => {
        document.documentElement.style.setProperty('--displaymodal', 'none')
        location.href = './../index.html';
    });

    modalContent.appendChild(a);


    document.documentElement.style.setProperty('--displaymodal', 'flex');
}

export function OpenModalError(message){
    CreateModal();
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.add('messagebox');
    modalContent.classList.add('error');
 
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Error';
    modalContent.appendChild(h1);

    const p = document.createElement('p');
    p.innerHTML = message;
    modalContent.appendChild(p);

    const a = document.createElement('a');
    a.innerHTML = 'Aceptar';
    a.addEventListener('click', () => {document.documentElement.style.setProperty('--displaymodal', 'none')});

    modalContent.appendChild(a);


    document.documentElement.style.setProperty('--displaymodal', 'flex');
}

export function OpenModalErrorReload(message){
    CreateModal();
    const modalContent = document.querySelector('.modal-content');
    modalContent.classList.add('messagebox');
    modalContent.classList.add('error');
 
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Error';
    modalContent.appendChild(h1);

    const p = document.createElement('p');
    p.innerHTML = message;
    modalContent.appendChild(p);

    const a = document.createElement('a');
    a.innerHTML = 'Aceptar';
    a.addEventListener('click', () => {
        document.documentElement.style.setProperty('--displaymodal', 'none');
        location.href = './../index.html';
    });

    modalContent.appendChild(a);


    document.documentElement.style.setProperty('--displaymodal', 'flex');
}


export function OpenModalOptions(){
    CreateModal();
    const ul = document.querySelector('header ul')
    const modalContent = document.querySelector('.modal-content');
    
    modalContent.classList.add('headermenu');
    modalContent.appendChild(ul.cloneNode(true));
    document.documentElement.style.setProperty('--displaymodal', 'flex');

    const modal = document.querySelector('.modal');
    modal.addEventListener('click', () => {document.documentElement.style.setProperty('--displaymodal', 'none')});

    const liHome = document.querySelectorAll('.modal-content li')[0];
    liHome.addEventListener('click', (e) => {
        e.preventDefault();
        if(document.title == 'Home'){
            location.href = 'index.html';
        }else{
            location.href = './../index.html';
        }
    });

    const liGlobalSongs = document.querySelectorAll('.modal-content li')[1];
    liGlobalSongs.addEventListener('click', (e) => {
        e.preventDefault();
        if(document.title == 'Home'){
            location.href = './html/globalsongs.html';
        }else{
            location.href = './globalsongs.html';
        }
    });

    const li3 = document.querySelectorAll('.modal-content li')[2];
    if(li3.innerHTML == 'Log in'){
        li3.addEventListener('click', (e) => {
            e.preventDefault();
            if(document.title == 'Home'){
                location.href = './html/login.html';
            }else{
                location.href = './login.html';
            }
        });
    } else{
        li3.addEventListener('click', (e) => {
            e.preventDefault();
            if(document.title == 'Home'){
                location.href = './html/yoursongs.html';
            }else{
                location.href = './yoursongs.html';
            }
        });
    }

    const li4 = document.querySelectorAll('.modal-content li')[3];
    if(li4.innerHTML == 'Sign up'){
        li4.addEventListener('click', (e) => {
            e.preventDefault();
            if(document.title == 'Home'){
                location.href = './html/signup.html';
            }else{
                location.href = './signup.html';
            }
        });
    } else{
        li4.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('pseudotoken');
        if(document.title == 'Home'){
            location.href = 'index.html';
        }else{
            location.href = './../index.html';
        }
        });
    }

}