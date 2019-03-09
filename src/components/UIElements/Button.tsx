import React from 'react';

import styles from './Button.module.css';
import { string } from 'prop-types';

interface IButton {
    text: string,
    clicked: any
}

const Button = ( { text = "", clicked }: IButton ) => {
    return (
        <div className={styles.button} onClick={clicked}>{text}</div>
    );
}

export default Button;
