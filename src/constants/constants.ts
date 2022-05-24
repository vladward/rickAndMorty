export const API_HOST: string = process.env.API_HOST as string;
export const BASE_URL: string = process.env.BASE_URL as string;

export const PATHS = {
  home: '/',
  character: '/character/:characterId',
  characters: '/characters',
  locations: '/locations',
  location: '/locations/:locationId',
  episodes: '/episodes',
  episode: '/episodes/:episodesId',
};
