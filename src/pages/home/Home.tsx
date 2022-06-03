import { Box } from '@mui/material';
import { FC } from 'react';

import { BlockTitle, CustomCard, RequestHandler } from '../../components';
import { useCharactersByIdsQuery } from '../../graphql/generated/graphql';
import { useStyles } from './styles';

export const Home: FC = () => {
  const styles = useStyles();

  const { data, loading } = useCharactersByIdsQuery({
    variables: {
      ids: ['1', '2', '3', '4', '5'],
    },
  });

  return (
    <Box className={styles.home}>
      <BlockTitle title='Main characters' />

      <Box className={styles.content}>
        <RequestHandler loading={loading}>
          {data?.charactersByIds?.map((character, index) => {
            if (character) {
              return (
                <CustomCard
                  key={index}
                  name={character.name}
                  image={character.image}
                  status={character.status}
                  species={character.species}
                  locationName={character.location?.name}
                  originName={character.origin?.name}
                />
              );
            }
          })}
        </RequestHandler>
      </Box>
    </Box>
  );
};
