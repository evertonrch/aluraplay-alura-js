const json = async function () { 
    const response = await fetch("http://localhost:3000/videos");

    if (!response.ok)
      throw new Error(`Erro na chamada da api (${response.status})`);

    return await response.json();
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

  if(!response.ok)
    throw new Error(`Não foi possível enviar o vídeo (${response.status})`)

  return response.json();
};

const searchVideo = async function (queryParam) {
  try {
    const response = await fetch(`http://localhost:3000/videos?q=${queryParam}`);
    if (!response.ok) 
      throw new Error(`Erro na chamada da api (${response.status} - ${response.statusText})`);
    
    return await response.json();
  } catch (error) {
    console.error(error.message);
  }
};

export { json, createVideo, searchVideo };
