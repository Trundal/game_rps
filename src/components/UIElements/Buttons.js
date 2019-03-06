import React from 'react';

import Button from './Button'
import styles from './Buttons.module.css';

const Buttons = ( { buttons=[], clicked }) => {
  console.log(buttons);
  return (
    <div className={ styles.buttons }>
      { buttons.map((button, index) =>
        <Button
          key={index}
          text={button}
          clicked={clicked(button)}
        />
      )}
    </div>
  );
}

export default Buttons;
