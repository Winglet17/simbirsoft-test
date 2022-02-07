export const fetchData = async (url) => {
  const response = await fetch(API_URL + url, { headers });

  if (!response.ok) {
    throw new Error("Ошибка, запрос не прошёл");
  }

  const data = await response.json();
  return data;
};

const API_URL = process.env.REACT_APP_API_URL;

const headers = {
  "X-Auth-Token": process.env.REACT_APP_API_TOKEN,
};
