import React from 'react';

import Button from './Button'
import styles from './Buttons.module.css';

interface IButtons {
  buttons: string[],
  clicked: any
}

const Buttons = ( { buttons=[], clicked }: IButtons) => {
  return (
    <div className={ styles.buttons }>
      { buttons.map((button, index) =>
        <Button
          key={index}
          text={button}
          clicked={() => clicked(button)}
        />
      )}
    </div>
  );
}

export default Buttons;
