import axios from 'axios';

const BASE_URL = "https://streaming-availability.p.rapidapi.com";

const options = (abcd: string, ktype:string,show: string, name: string) => ({
  method: 'GET',
  url: `https://streaming-availability.p.rapidapi.com/search/${ktype}`,
  params: {
    services: 'prime.subscription,netflix,apple.addon,hbo,hulu.addon.hbo,prime.addon.hbomaxus',
    country: 'us',
    title: name,
    output_language: 'en',
    genres: abcd,
    show_type: show,
    order_by: 'original_title',
    genres_relation: 'and',
  },
  headers: {
    'X-RapidAPI-Key': '5e609e788emsh00a312c9b84c741p1bc1edjsn6414bf9a6266',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
});

export async function FetchFromApi(url: string, ktype:string, show: string,name: string) {
  const { data } = await axios.request(options(url,ktype,show,name));
  return data;
}

