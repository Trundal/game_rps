import React from 'react';

import styles from './Header.module.css';

const Header = ({text=""}) => {
  return (
    <div className={ styles.header} >
      <h1 className={ styles.title}>{text}</h1>
    </div>
  );
}

export default Header;
