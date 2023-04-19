import { createVideo } from "../js/apiConnect.js";

const form = document.querySelector("[data-form]");

const videoForm = async function (e) {
  e.preventDefault();

  const titulo = document.querySelector("[data-titulo]").value;
  const url = document.querySelector("[data-url]").value;
  const imagem = document.querySelector("[data-img]").value;
  const descricao = "" + Math.trunc(Math.random() * 10) + 1;

  try {
    await createVideo(titulo, descricao, url, imagem);
    window.location.href = "../pages/envio-concluido.html";
  }catch(error) {
    alert(error.message);
  }
};

form.addEventListener("submit", (e) => videoForm(e));
