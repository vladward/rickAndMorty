import { Card } from '@mui/material';
import { FC } from 'react';

import { BlockTitle } from '../blockTitle/BlockTitle';
import { TitleWithDescription } from '../titleWithDescription/TitleWithDescription';
import { useStyles } from './styles';

export const EpisodesCard: FC<EpisodesCardType> = ({ episode }) => {
  const styles = useStyles();
  return (
    <Card
      className={styles.characterCardInfoEpisodes}
      variant={'elevation'}
      elevation={24}
    >
      <BlockTitle title='episodes' color='black' fontWeight={600} />
      {episode?.map((item, index) => {
        return (
          <TitleWithDescription
            key={index}
            title={item?.episode}
            description={item?.name}
          />
        );
      })}
    </Card>
  );
};

type EpisodesCardType = {
  episode?: Array<{
    id?: string | null;
    name?: string | null;
    episode?: string | null;
  } | null>;
};
