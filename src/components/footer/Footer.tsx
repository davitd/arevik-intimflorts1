import React from 'react';
import styles from './footer.module.css';
import logo from '../../assets/images/logo.png';
import { FOOTER_NAV } from '../../data/footer-navigation';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img className={styles.footer_logo} alt={'intim-florts'} src={logo} />
      </div>
      <div>
        <ul className={styles.ul}>
          {FOOTER_NAV.map((item, index) => {
            if (item.path) {
              return (
                <Link to={item.path} key={index} style={{ cursor: 'pointer' }}>
                  {' '}
                  {item.value}
                </Link>
              );
            }
            return <li key={index}>{item.value}</li>;
          })}
        </ul>
      </div>
      <hr className={styles.divider} />
      <div>
        <p className={styles.footer_text}>
          © 2023 Intim Florts | All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
