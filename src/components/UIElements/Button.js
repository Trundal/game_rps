import React from 'react';

import styles from './Button.module.css';

const Button = ({ text='', clicked }) => {
    return (
        <div className={styles.button} onClick={clicked}>{text}</div>
    );
}

export default Button;
