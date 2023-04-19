import { searchVideo } from "./apiConnect.js";
import createCard from "./showVideos.js";

const btnSearch = document.querySelector("[data-btn-search]");
const listVideo = document.querySelector("[data-video]");

const getVideosByQueryString = async function(e) {
    e.preventDefault();
    const inputSearch = document.querySelector("[data-search]").value;
    const data = await searchVideo(inputSearch);

    // listVideo.innerHTML = "";
    while(listVideo.firstChild) 
        listVideo.removeChild(listVideo.firstChild);

    data.forEach(element => listVideo.appendChild(createCard(element)));
}

btnSearch.addEventListener("click", (e) => getVideosByQueryString(e))
