import * as footer from './footer.js';
import * as header from './header.js';
import * as modals from "./modals.js";

document.addEventListener('DOMContentLoaded', () => {
    header.LoadAnyHeader();
    footer.LoadFooter();

    /*Validacion de si user id actual es null y sino preguntar si es admin y si es admin poner opcion de borrar y editar, otro load diferente  */
    LoadSongs();
});

async function LoadSongs(){
    const pseudotoken = localStorage.getItem('pseudotoken');
    if(localStorage.getItem('pseudotoken') == null){
        modals.OpenModalErrorReload(`You must be logged to perform this action.`);
        return;
    }

    const list = await LoadSongsAPI(pseudotoken);
  
    if (list != null) {
        for (let song of list){
                const songdata = await GetSongAPI(song['songid']);
                if(songdata != null){
                AddSongTable(song['songid'], songdata['name'], songdata['author'], song['rating'], songdata['rating'])
                }
        }
    }

}