import { Box, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import Masonry from 'react-masonry-css';

import { useCharactersQuery } from '../../graphql/generated/graphql';
import { CustomCard } from '../customCard/CustomCard';
import { RequestHandler } from '../requestHandler/RequestHandler';
import { useStyles } from './styles';

export const CustomCardsBlock: FC<{ inputValue: string }> = ({ inputValue }) => {
  const styles = useStyles();

  const { data, loading } = useCharactersQuery({
    variables: {
      filter: {
        name: inputValue,
      },
    },
  });
  return (
    <Box className={styles.content}>
      <RequestHandler loading={loading}>
        <Masonry
          breakpointCols={4}
          className={styles.myMasonryGrid}
          columnClassName={styles.myMasonryGridColumn}
        >
          {data?.characters?.results?.map((character, index) => {
            if (character) {
              return (
                <Grid item key={index}>
                  <CustomCard
                    id={character.id}
                    name={character.name}
                    image={character.image}
                    status={character.status}
                    species={character.species}
                    locationName={character.location?.name}
                    originName={character.episode[0]?.name}
                    margin={0}
                  />
                </Grid>
              );
            }
          }) || (
            <Typography variant='h4' className={styles.charactersNoResults}>
              No results
            </Typography>
          )}
        </Masonry>
      </RequestHandler>
    </Box>
  );
};
