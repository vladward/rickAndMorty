import { Link } from 'react-router-dom';

import { logo } from '../../assets/index';
import { useStyles } from './styles';

export const Logo = () => {
  const styles = useStyles();
  return (
    <Link to={'/'} className={styles.logo}>
      <img src={logo} alt='logo' className={styles.logoImg} />
    </Link>
  );
};
