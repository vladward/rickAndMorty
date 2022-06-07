import { Box } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { HEADER_LINKS } from '../../constants/constants';
import { navigationStyles } from '../../navigation/styles';
import { Logo } from '../logo/Logo';
import { useStyles } from './styles';

export const Header: FC = () => {
  const styles = useStyles();
  const container = navigationStyles();
  return (
    <Box className={styles.header}>
      <Box className={container.container} style={{ backgroundColor: 'white' }}>
        <nav className={styles.nav}>
          <Logo />
          <Box className={styles.navLinks}>
            {HEADER_LINKS.map((link, index) => (
              <Link
                key={`${index}${link.link}`}
                to={link.link}
                className={styles.linkButton}
              >
                {link.name}
              </Link>
            ))}
          </Box>
        </nav>
      </Box>
    </Box>
  );
};
