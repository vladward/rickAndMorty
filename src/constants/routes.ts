import { Characters, Home } from '../pages';
import { PATHS } from './constants';

export const routes = [
  {
    path: PATHS.home,
    component: Home,
  },
  {
    path: PATHS.characters,
    component: Characters,
  },
  // {
  //   path: PATHS.character,
  //   // component: Character,
  // },
  // {
  //   path: PATHS.episodes,
  //   // component: Episodes,
  // },
  // {
  //   path: PATHS.episode,
  //   // component: Episode,
  // },
  // {
  //   path: PATHS.locations,
  //   // component: Locations,
  // },
  // {
  //   path: PATHS.location,
  //   // component: Location,
  // },
];
