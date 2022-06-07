import { Card } from '@mui/material';
import { FC } from 'react';

import { Location } from '../../graphql/generated/graphql';
import { BlockTitle } from '../blockTitle/BlockTitle';
import { TitleWithDescription } from '../titleWithDescription/TitleWithDescription';
import { useStyles } from './styles';

export const OriginCard: FC<OriginCardType> = ({ type, dimension, name }) => {
  const styles = useStyles();
  return (
    <Card className={styles.characterCardInfoOrigin} variant={'elevation'} elevation={24}>
      <BlockTitle title='origin' color='black' fontWeight={600} />
      <TitleWithDescription title='Name' description={name} />
      {type && <TitleWithDescription title='Type' description={type} />}
      {dimension && <TitleWithDescription title='Dimension' description={dimension} />}
    </Card>
  );
};

export type OriginCardType = Pick<Location, 'name' | 'type' | 'dimension'>;
