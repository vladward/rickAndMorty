import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import { useStyles } from './styles';

export const CardInfo: FC<CardInfoType> = ({
  name,
  status,
  species,
  locationName,
  originName,
}) => {
  const styles = useStyles();
  const onGetStatus = (status: string | null | undefined) => {
    const statusStyles = {
      background: status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray',
      borderRadius: '50%',
      width: '10px',
      height: '10px',
      marginRight: '5px ',
    };
    return (
      <Box className={styles.statusWrapper}>
        <span style={statusStyles} />
        {status}&nbsp;-&nbsp;
      </Box>
    );
  };
  return (
    <Box className={styles.cardInfo}>
      <Typography gutterBottom variant={'h5'} component={'div'}>
        {name}
      </Typography>
      <Typography variant={'subtitle2'} className={styles.cardInfoStatus}>
        {onGetStatus(status)}
        {species}
      </Typography>
      <Typography className={styles.cardInfoTitle}>
        <Box component='span' className={styles.cardInfoTitleText}>
          Last known location:
        </Box>{' '}
        {locationName}
      </Typography>
      <Typography className={styles.cardInfoTitle}>
        <Box component='span' className={styles.cardInfoTitleText}>
          First seen in:
        </Box>{' '}
        {originName}
      </Typography>
    </Box>
  );
};

type CardInfoType = {
  name?: string | null | undefined;
  status?: string | null | undefined;
  species?: string | null | undefined;
  locationName?: string | null | undefined;
  originName?: string | null | undefined;
};
