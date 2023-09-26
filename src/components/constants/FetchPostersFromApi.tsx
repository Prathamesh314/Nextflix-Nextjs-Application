

const axios = require('axios');

const options = (name: string) => ({
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/title/find',
  params: {
    q: name
  },
  headers: {
    'X-RapidAPI-Key': '5e609e788emsh00a312c9b84c741p1bc1edjsn6414bf9a6266',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
});


export async function FetchPostersFromApi(name: string) {
    const data = await axios.request(options(name));
    return data;
  }