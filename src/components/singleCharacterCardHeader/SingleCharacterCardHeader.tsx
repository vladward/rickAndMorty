import { Box, CardMedia, Paper } from '@mui/material';
import { FC } from 'react';

import { Character } from '../../graphql/generated/graphql';
import { PersonStatus } from '../../utils/PersonStatus';
import { TitleWithDescription } from '../titleWithDescription/TitleWithDescription';
import { useStyles } from './styles';

export const SingleCharacterCardHeader: FC<SingleCharacterCardHeaderType> = ({
  type,
  species,
  status,
  gender,
  image,
}) => {
  const styles = useStyles();
  return (
    <Box className={styles.characterContentHeader}>
      <Paper
        variant={'elevation'}
        elevation={24}
        style={{ margin: '20px', borderRadius: '50px' }}
      >
        <CardMedia
          component={'img'}
          width={'300px'}
          height={'300px'}
          className={styles.characterContentHeaderImage}
          alt='picture'
          image={image || ''}
        />
      </Paper>
      <Box className={styles.characterContentHeaderDescription}>
        <TitleWithDescription
          title='Status'
          description={<PersonStatus status={status} width='20px' height='20px' />}
        />
        <TitleWithDescription title='Species' description={species} />
        <TitleWithDescription title='Gender' description={gender} />
        {type && <TitleWithDescription title='Type' description={type} />}
      </Box>
    </Box>
  );
};

type SingleCharacterCardHeaderType = Pick<
  Character,
  'image' | 'type' | 'status' | 'species' | 'gender'
>;
