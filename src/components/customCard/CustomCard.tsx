import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { FC } from 'react';

import { CardInfo } from '../cardInfo/CardInfo';

export const CustomCard: FC<CustomCardType> = ({
  name,
  image,
  status,
  species,
  locationName,
  originName,
}) => {
  return (
    <Card sx={{ width: '300px', margin: '0 6px' }}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          height={'300px'}
          width={'300px'}
          alt={`${name}`}
          image={`${image}`}
        />
        <CardContent>
          <CardInfo
            name={name}
            status={status}
            species={species}
            locationName={locationName}
            originName={originName}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export type CustomCardType = {
  name?: string | null;
  image?: string | null;
  status?: string | null;
  species?: string | null;
  locationName?: string | null;
  originName?: string | null;
  margin?: string | number;
};
