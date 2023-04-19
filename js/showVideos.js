import { json as listVideos } from "./apiConnect.js";

const lista = document.querySelector("[data-video]");

const createCard = function ({ id, titulo, descricao, url, imagem }) {
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
    if (!data) throw new Error(`Json error (${data})`);

    data.forEach((video) => lista.appendChild(createCard(video)));
  } catch (error) {
    console.error(error);
  }
};
videos();
