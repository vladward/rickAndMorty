import { FC } from 'react';

export const Home: FC<HomePageType> = () => {
  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-types
type HomePageType = {};
