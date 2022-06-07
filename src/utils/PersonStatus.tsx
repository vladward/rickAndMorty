import { Box } from '@mui/material';
import { FC } from 'react';

export const PersonStatus: FC<PersonStatusType> = ({
  status,
  species,
  width = '10px',
  height = '10px',
}) => {
  const statusStyles = {
    background: status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray',
    borderRadius: '50%',
    width: width,
    height: height,
    marginRight: '10px ',
    alignSelf: 'center',
  };
  return (
    <Box style={{ display: 'flex', alignItems: 'center' }}>
      <Box component='span' style={statusStyles} />
      <Box component='span'>
        {status}&nbsp;{species ? `- ` + species : ''}
      </Box>
    </Box>
  );
};

type PersonStatusType = {
  status?: string | null;
  species?: string | null;
  width?: string | number | undefined;
  height?: string | number | undefined;
};
