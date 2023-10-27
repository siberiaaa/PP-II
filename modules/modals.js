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

export function OpenModalRate(userid, songid){
    
        CreateModal(); 
        const modalContent = document.querySelector('.modal-content');
        modalContent.classList.add('messagebox');
        modalContent.classList.add('rate');
     
        const h1 = document.createElement('h1');
        h1.innerHTML = 'Rate';
        modalContent.appendChild(h1);
    
        const div = document.createElement('div');
        div.classList.add('rating');
    
        //star
        const input10 = document.createElement('input');
        input10.type = 'radio'; 
        input10.id = 'star10'; 
        input10.name = 'rating';
        input10.value = 10;
        const label10 = document.createElement('label');
        label10.classList.add('star');
        label10.setAttribute('for', 'star10')
        label10.ariaHidden = true;
    
        const input9 = document.createElement('input');
        input9.type = 'radio'; 
        input9.id = 'star9'; 
        input9.name = 'rating';
        input9.value = 9;
        const label9 = document.createElement('label');
        label9.classList.add('star');
        label9.setAttribute('for', 'star9')
        label9.ariaHidden = true;
    
        const input8 = document.createElement('input');
        input8.type = 'radio'; 
        input8.id = 'star8'; 
        input8.name = 'rating';
        input8.value = 8;
        const label8 = document.createElement('label');
        label8.classList.add('star');
        label8.setAttribute('for', 'star8')
        label8.ariaHidden = true;
    
        const input7 = document.createElement('input');
        input7.type = 'radio'; 
        input7.id = 'star7'; 
        input7.name = 'rating';
        input7.value = 7;
        const label7 = document.createElement('label');
        label7.classList.add('star');
        label7.setAttribute('for', 'star7')
        label7.ariaHidden = true;
    
        const input6 = document.createElement('input');
        input6.type = 'radio'; 
        input6.id = 'star6'; 
        input6.name = 'rating';
        input6.value = 6;
        const label6 = document.createElement('label');
        label6.classList.add('star');
        label6.setAttribute('for', 'star6')
        label6.ariaHidden = true;
        
        const input5 = document.createElement('input');
        input5.type = 'radio'; 
        input5.id = 'star5'; 
        input5.name = 'rating';
        input5.value = 5;
        const label5 = document.createElement('label');
        label5.classList.add('star');
        label5.setAttribute('for', 'star5')
        label5.ariaHidden = true;
    
        const input4 = document.createElement('input');
        input4.type = 'radio'; 
        input4.id = 'star4'; 
        input4.name = 'rating';
        input4.value = 4;
        const label4 = document.createElement('label');
        label4.classList.add('star');
        label4.setAttribute('for', 'star4') 
        label4.ariaHidden = true;
    
        const input3 = document.createElement('input');
        input3.type = 'radio'; 
        input3.id = 'star3'; 
        input3.name = 'rating';
        input3.value = 3;
        const label3 = document.createElement('label');
        label3.classList.add('star');
        label3.setAttribute('for', 'star3')
        label3.ariaHidden = true;
    
        const input2 = document.createElement('input');
        input2.type = 'radio'; 
        input2.id = 'star2'; 
        input2.name = 'rating';
        input2.value = 2;
        const label2 = document.createElement('label');
        label2.classList.add('star');
        label2.setAttribute('for', 'star2')
        label2.ariaHidden = true;
    
        const input1 = document.createElement('input');
        input1.type = 'radio'; 
        input1.id = 'star1'; 
        input1.name = 'rating';
        input1.value = 1;
        const label1 = document.createElement('label');
        label1.classList.add('star');
        label1.setAttribute('for', 'star1')
        label1.ariaHidden = true;
    
        div.append(input10, label10, input9, label9, input8, label8, 
            input7, label7, input6, label6, input5, label5, 
            input4, label4, input3, label3, input2, label2, input1, label1);
        modalContent.appendChild(div);
        
        return new Promise(resolve => {
        const a = document.createElement('a');
        a.innerHTML = 'Rate';
        a.addEventListener('click', () => {
            
            document.documentElement.style.setProperty('--displaymodal', 'none');
            const checked = document.querySelector('input[name="rating"]:checked');
            if (checked == null){
                resolve({userid: userid, songid: songid, rating:0});
            }else{
                resolve({userid: userid, songid: songid, rating:parseInt(checked.value)});
            }
        });
    
        modalContent.appendChild(a);
        document.documentElement.style.setProperty('--displaymodal', 'flex');
    });

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