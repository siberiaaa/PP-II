export function LoadFooter(){
    const footer = document.createElement('footer');

    const section1 = document.createElement('section');

    const ul = document.createElement('ul');

    const li1 = document.createElement('li');
    const a1 = document.createElement('a');
    a1.setAttribute('href', 'https://cdn.discordapp.com/attachments/945837265593192499/1164992910425595974/1697826347808.jpg?ex=65453b32&is=6532c632&hm=a7fa6195635aca6e7fbde2d2a63060129a264bf043ac0a63ba1a3e8bb41dcc79&');
    const img = document.createElement('img');
    if(document.title == 'Home'){
        img.src = 'assets/KAI_WALK.gif';
    }else{
        img.src = './../assets/KAI_WALK.gif';
    }
    img.setAttribute('id', 'footer-logo')
    a1.appendChild(img);
    li1.appendChild(a1);

    const li2 = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerHTML = 'Kai';
    li2.appendChild(h4);

    ul.appendChild(li1);
    ul.appendChild(li2);

    section1.appendChild(ul);

    const hr = document.createElement('hr');

    const section2 = document.createElement('section');

    const h31 = document.createElement('h3');
    h31.innerHTML = '"Copyright © 2023 All rights reserved."';
    section2.appendChild(h31);

    const h32 = document.createElement('h3');
    h32.innerHTML = 'By ';

    const a = document.createElement('a');
    a.setAttribute('href', 'https://github.com/siberiaaa');
    a.setAttribute('draggable', 'false');
    a.innerHTML = 'Siberia';

    h32.appendChild(a);

    section2.appendChild(h32);

    footer.appendChild(section1);
    footer.appendChild(hr);
    footer.appendChild(section2);

    const main = document.querySelector('main');
    main.after(footer);
}