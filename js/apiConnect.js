const json = async function () {
  try {
    const response = await fetch("http://localhost:3000/videos");

    if (!response.ok)
      throw new Error(`Erro na chaamda da api (${response.status})`);

    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

const createVideo = async function (titulo, descricao, url, imagem) {
  const response = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo,
      descricao: `${descricao} mil visualizações`,
      url,
      imagem,
    }),
  });
  return response.json();
};

export { json, createVideo };
