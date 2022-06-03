import { Box } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';

import { BlockTitle, CustomCardsBlock, CustomInput } from '../../components';
import { useDebounce } from '../../hooks';
import { useStyles } from './styles';

export const Characters: FC = () => {
  const styles = useStyles();
  const [searchValue, setSearchValue] = useState<string>();
  const { debouncedValue } = useDebounce(searchValue);

  const handleSetSearchValue = (e: ChangeEvent<HTMLInputElement>) =>
    e && setSearchValue(e.currentTarget.value);

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.characters}>
      <BlockTitle title='Characters' />
      <CustomInput
        label='Enter a name'
        variant='filled'
        value={searchValue}
        onChange={handleSetSearchValue}
      />
      <CustomCardsBlock inputValue={debouncedValue} />
    </Box>
  );
};
