export const API_HOST: string = process.env.REACT_APP_API_HOST as string;
export const BASE_URL: string = process.env.REACT_APP_BASE_URL as string;

export const PATHS = {
  home: '/',
  character: '/character/:characterId',
  characters: '/characters',
  locations: '/locations',
  location: '/locations/:locationId',
  episodes: '/episodes',
  episode: '/episodes/:episodesId',
};

export const HEADER_LINKS: HeaderLinksTypes[] = [
  { name: 'Characters', link: PATHS.characters },
  { name: 'Episodes', link: PATHS.episodes },
  { name: 'Locations', link: PATHS.locations },
];

export const EXTERNAL_LINKS: GeneralLinksType = {
  github: 'https://github.com/vladward',
};

export const PreloaderSizes = {
  s: '25px',
  m: '60px',
  l: '100px',
};

type HeaderLinksTypes = {
  name: string;
  link: string;
};

type GeneralLinksType = {
  [key: string]: string;
};
