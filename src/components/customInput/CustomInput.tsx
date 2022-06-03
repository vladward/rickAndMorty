import { TextField } from '@mui/material';
import { ChangeEvent, FC } from 'react';

import { useStyles } from './styles';

export const CustomInput: FC<CustomInputType> = ({ value, onChange, label, variant }) => {
  const styles = useStyles();
  return (
    <TextField
      value={value}
      onChange={onChange}
      className={styles.customInput}
      variant={variant}
      label={label}
      InputLabelProps={{
        style: {
          left: '30%',
          transformOrigin: 'top',
          color: 'black',
          fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
          fontWeight: 'bold',
          textAlign: 'center',
        },
      }}
      sx={{
        '& .MuiFilledInput-root:after': {
          borderBottom: 'none',
        },
      }}
    />
  );
};

type CustomInputType = {
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label?: string | undefined;
  variant?: 'filled' | 'standard' | 'outlined';
};
