import { Box, Typography } from '@mui/material';
import { FC } from 'react';

import { useStyles } from './styles';

export const TitleWithDescription: FC<TitleWithDescriptionType> = ({
  description,
  title,
}) => {
  const styles = useStyles();
  return (
    <Box className={styles.titleWithDescription}>
      <Typography
        variant='h4'
        className={styles.title}
        marginRight={20}
        textAlign='left'
        fontFamily='Poppins'
        fontWeight='500'
        color={'GrayText'}
        width={180}
      >
        {title}
      </Typography>
      <Typography
        variant='h3'
        className={styles.description}
        textAlign='left'
        fontFamily='Poppins'
        fontWeight='500'
        color={'GrayText'}
        width={'max-content'}
      >
        {description}
      </Typography>
    </Box>
  );
};

type TitleWithDescriptionType = {
  title?: string | null;
  description?: string | null | JSX.Element;
};
