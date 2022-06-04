import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import { PersonStatus } from '../../utils/PersonStatus';
import { CustomCardType } from '../customCard/CustomCard';
import { useStyles } from './styles';

export const CardInfo: FC<CardInfoType> = ({
  name,
  status,
  species,
  locationName,
  originName,
}) => {
  const styles = useStyles();
  return (
    <Box className={styles.cardInfo}>
      <Typography fontFamily='Poppins' gutterBottom variant={'h5'} component={'div'}>
        {name}
      </Typography>
      <Typography
        fontFamily='Poppins'
        variant={'subtitle2'}
        className={styles.cardInfoStatus}
      >
        <PersonStatus status={status} species={species} />
      </Typography>
      <Typography fontFamily='Poppins' className={styles.cardInfoTitle}>
        <Box component='span' className={styles.cardInfoTitleText}>
          Last known location:
        </Box>{' '}
        {locationName}
      </Typography>
      <Typography fontFamily='Poppins' className={styles.cardInfoTitle}>
        <Box component='span' className={styles.cardInfoTitleText}>
          First seen in:
        </Box>{' '}
        {originName}
      </Typography>
    </Box>
  );
};

type CardInfoType = Omit<CustomCardType, 'margin'>;
