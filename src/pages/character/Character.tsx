import { Box, Card, Paper } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  BlockTitle,
  EpisodesCard,
  LocationCard,
  OriginCard,
  RequestHandler,
  SingleCharacterCardHeader,
} from '../../components';
import { useCharacterLazyQuery } from '../../graphql/generated/graphql';
import { useStyles } from './styles';

export const Character = () => {
  const styles = useStyles();
  const { characterId } = useParams();

  const [charactersQuery, { data, loading }] = useCharacterLazyQuery();

  useEffect(() => {
    if (characterId) {
      charactersQuery({
        variables: {
          id: characterId,
        },
      });
    }
  }, []);

  const character = data?.character;

  return (
    <Box className={styles.characterWrapper}>
      <BlockTitle
        title={character?.name || ''}
        fontWeight={700}
        fontSize='72px'
        color='white'
      />

      <Box className={styles.characterContent}>
        <RequestHandler loading={loading}>
          <Paper
            variant={'elevation'}
            elevation={2}
            style={{ margin: '20px', borderRadius: '50px', backgroundColor: 'inherit' }}
          >
            <Card variant={'outlined'} className={styles.characterCard}>
              <SingleCharacterCardHeader
                type={character?.type}
                species={character?.species}
                image={character?.image}
                status={character?.status}
                gender={character?.gender}
              />
              <Box className={styles.characterCardInfo}>
                <OriginCard
                  name={character?.origin?.name}
                  type={character?.origin?.type}
                  dimension={character?.origin?.dimension}
                />
                <LocationCard
                  name={character?.location?.name}
                  type={character?.location?.type}
                  dimension={character?.location?.dimension}
                />
                <EpisodesCard episode={character?.episode} />
              </Box>
            </Card>
          </Paper>
        </RequestHandler>
      </Box>
    </Box>
  );
};
