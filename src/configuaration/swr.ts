const BASE_URL = 'https://pokeapi.co/api/v2/';

const URL_PATH = {
  POKEMON: 'pokemon',
};

const fetcher = (url: string) => fetch(BASE_URL + url).then(res => res.json());

export {fetcher, URL_PATH};
