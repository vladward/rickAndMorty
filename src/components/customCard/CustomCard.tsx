import { Card, CardActionArea, CardContent, CardMedia, Link } from '@mui/material';
import { FC } from 'react';

import { CardInfo } from '../cardInfo/CardInfo';

export const CustomCard: FC<CustomCardType> = ({
  id,
  name,
  image,
  status,
  species,
  locationName,
  originName,
  margin = '0 6px',
}) => {
  return (
    <Card sx={{ width: '300px', maxHeight: '510px', margin: { margin } }}>
      <Link underline='none' color='inherit' href={`/character/${id}`}>
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
      </Link>
    </Card>
  );
};

export type CustomCardType = {
  id?: string | null;
  name?: string | null;
  image?: string | null;
  status?: string | null;
  species?: string | null;
  locationName?: string | null;
  originName?: string | null;
  margin?: string | number;
};
