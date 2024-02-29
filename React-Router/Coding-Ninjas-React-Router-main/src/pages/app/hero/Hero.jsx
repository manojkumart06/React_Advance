import React from 'react';
import style from './Hero.module.css';

function Hero() {
  return (
    <header>
      <section className={style.logo_wrapper}>
        <div className={style.logo}></div>
          
      
      </section>
      <section className={style.content}>
        <h4>Are you ready to ?</h4>
        <h1>Be a Tech Wizard</h1>
        <p>
        Discover how seasoned programmers tackle challenges live. While watching pre-planned
        tutorials can be beneficial, grasping how programmers approach problem-solving is priceless.
        </p>
      </section>
    </header>
  );
}

export default Hero;
