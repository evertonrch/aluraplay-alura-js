import { searchVideo } from "./apiConnect.js";
import createCard from "./showVideos.js";

const btnSearch = document.querySelector("[data-btn-search]");
const listVideo = document.querySelector("[data-video]");

const getVideosByQueryString = async function(e) {
    e.preventDefault();
    const inputSearch = document.querySelector("[data-search]").value;
    const data = await searchVideo(inputSearch);

    if(data.length === 0) {
        const out = "Nenhum vídeo encontrado"
        listVideo.innerHTML = `<h2 class="mensagem__titulo">${out}</h2>`;
        return;
    }
    // listVideo.innerHTML = "";
    while(listVideo.firstChild) 
        listVideo.removeChild(listVideo.firstChild);

    data.forEach(element => listVideo.appendChild(createCard(element)));
}

btnSearch.addEventListener("click", (e) => getVideosByQueryString(e))
