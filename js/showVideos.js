import { getVideos } from "./apiConnect.js";

const lista = document.querySelector("[data-video]");

const createCard = function () {
  const listItemVideo = document.createElement("li");
  listItemVideo.classList.add("videos__item");
  listItemVideo.innerHTML = `
        <li class="videos__item">
            <iframe width="100%" height="72%" src="https://www.youtube.com/embed/YhnNOTde2I0"
                title="Mercado de Trabalho | Desmistificando Mobile - Episódio 5" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="./img/logo.png" alt="logo canal alura">
                <h3>Mercado de Trabalho | Desmistificando Mobile...</h3>
                <p>1,1 mil visualizações</p>
            </div>
        </li>    
    `;
  return listItemVideo;
};

const videos = async function () {
  try {
    const data = await getVideos.json();
    if (!data) throw new Error(`Json error (${data})`);
  } catch (error) {
    console.error(error);
  }
};
