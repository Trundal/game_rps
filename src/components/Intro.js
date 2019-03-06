import React from 'react';

import styles from './Intro.module.css';

//TODO: Replace this with non-hardcoded solution - ideally from CMS, Backend or Localisation system

const Intro = () => {
  return (
    <div className={ styles.intro }>
      <p>Welcome to the classic game of Rock-Paper-Scissors!
      In this game, you can test your fate against the computer.
      Remember... Paper covers Rock, Rock crushes Scissors, Scissors cut Paper.
      Choose carefully!</p>
    </div>
  );
}

export default Intro;
