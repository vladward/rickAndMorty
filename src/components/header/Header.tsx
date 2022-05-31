import { FC } from 'react';
import { Link } from 'react-router-dom';

import { HEADER_LINKS } from '../../constants/constants';
import { Logo } from '../logo/Logo';
import { useStyles } from './styles';

export const Header: FC = () => {
  const styles = useStyles();
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <Logo />
        <div className={styles.navLinks}>
          {HEADER_LINKS.map((link, index) => (
            <Link key={index} to={link.link} className={styles.linkButton}>
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};
