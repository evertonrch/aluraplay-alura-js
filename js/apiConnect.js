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

export const getVideos = {
  json,
};
