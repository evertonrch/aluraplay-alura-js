import { json as listVideos } from "./apiConnect.js";

const lista = document.querySelector("[data-video]");

export default function createCard({ id, titulo, descricao, url, imagem }) {
  const listItemVideo = document.createElement("li");
  listItemVideo.classList.add("videos__item");
  listItemVideo.innerHTML = `
        <li class="videos__item">
            <iframe width="100%" height="72%" src="${url}"
                title="${titulo}"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
        </li> `;
  return listItemVideo;
};

const videos = async function () {
  try {
    const data = await listVideos();
    data.forEach((video) => lista.appendChild(createCard(video)));
  } catch (error) {
    const errorMessage = `<h2 class="mensagem__titulo">${error.message}</h2>`
    lista.innerHTML = errorMessage;
  }
};
videos();
