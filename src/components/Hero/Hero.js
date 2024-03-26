import React, { useEffect, useState } from 'react';
import hero_catfish from "./images/hero/hero-catfish.gif";
import hero_message from "./images/hero/hero-message.png";
import hero_suptitle from "./images/hero/hero-suptitle.png";
import "./_hero.scss"
import "../../scss/_common.scss";
import "../../scss/_fonts.scss";
import "./_lang.scss";
import "../../scss/_margue.scss";

import "../../scss/_reset.scss";
const Hero = () => {
  let CURRENT_MESSAGE = 0;
  const MESSAGES = [
    'Seems like\nu planned a date\nwith someone',
    'did you ever talk\nto a catfish?',
    'I’LL BE YOUR LAST\nCATFISH TONIGHT',
  ];
  const [message, setMessage] = useState(MESSAGES[0]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMessage(MESSAGES[(CURRENT_MESSAGE + 1) % MESSAGES.length]);
      CURRENT_MESSAGE++;
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [CURRENT_MESSAGE, MESSAGES]);
  return (
    <section className='hero'>
      <div className='hero__container container'>
        <div className='hero__cat'>
          <img src={hero_catfish} alt='hero_catfish' />
          <div className='hero__message hero-message'>
            <img className='hero-message__background'
              src={hero_message}
              alt='hero_message'
            />
            <p className='hero-message__text'> {message} </p>
          </div>
        </div>
        <div className='hero__col'>
          <div className='hero__top'>
            <img
              className='hero__subtitle'
              src={hero_suptitle}
              alt='hero__subtle'
            />
            <div class="hero__top">
             
              
              <div class="hero__lang lang">
                <svg
                  class="lang__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="32"
                  height="32"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path
                      d="M256 0C114.841 0 0 114.841 0 256s114.841 256 256 256 256-114.841 256-256S397.159 0 256 0ZM32 256a223.492 223.492 0 0 1 7.868-58.88h79.585a476.089 476.089 0 0 0 0 117.76H39.868A223.492 223.492 0 0 1 32 256Zm115.8 0a438.984 438.984 0 0 1 3.908-58.88H240v117.76h-88.294A438.984 438.984 0 0 1 147.8 256ZM272 34.724c20.983 7.072 41.33 27.726 57.544 59.059 10.775 20.821 19.208 45 25.061 71.337H272Zm-32 0v130.4h-82.6c5.853-26.336 14.286-50.516 25.061-71.337C198.671 62.45 219.017 41.8 240 34.724Zm0 312.156v130.4c-20.983-7.072-41.329-27.726-57.544-59.059-10.775-20.821-19.208-45-25.061-71.337Zm32 130.4v-130.4h82.605c-5.853 26.336-14.286 50.516-25.061 71.337C313.33 449.55 292.983 470.2 272 477.276Zm0-162.4V197.12h88.294A438.984 438.984 0 0 1 364.2 256a438.984 438.984 0 0 1-3.908 58.88Zm120.548-117.76h79.584a224.248 224.248 0 0 1 0 117.76h-79.584A471.238 471.238 0 0 0 396.2 256a471.238 471.238 0 0 0-3.652-58.88Zm68.169-32H387.3c-6.476-31.755-16.371-61-29.332-86.044a215.821 215.821 0 0 0-19.64-31.4A225.3 225.3 0 0 1 460.717 165.12ZM173.677 47.672a215.823 215.823 0 0 0-19.641 31.4c-12.961 25.045-22.856 54.289-29.332 86.044H51.283A225.3 225.3 0 0 1 173.677 47.672ZM51.283 346.88H124.7c6.476 31.755 16.371 61 29.332 86.044a215.823 215.823 0 0 0 19.641 31.4A225.3 225.3 0 0 1 51.283 346.88Zm287.041 117.448a215.821 215.821 0 0 0 19.64-31.4c12.961-25.045 22.856-54.289 29.332-86.044h73.421a225.3 225.3 0 0 1-122.393 117.444Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
                <ul class="lang__list">
                  <li class="lang__item" onclick="window.location.href = '/'">
                    EN
                  </li>
                  <li class="lang__item" onclick="window.location.href='/cn/'">
                    CN
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <h1 class="hero__title">
              NEVER FALL IN<br />LOVE WITH A<br /><span>meme coin</span>
            </h1>
            <div class="hero__row">
              <a
                class="hero__btn hero__btn_lg"
                href="https://raydium.io/swap/?outputCurrency=AcY6RWuWKM5NU7BeSE4c4zQxBZpyU7pTLNF3g5DTWUC2"
              >GET $CATFISH</a>
              <div class="hero__socials">
                <a
                  class="hero__btn hero__btn_sm"
                  href="https://twitter.com/catfishonsol"
                >
                  <svg
                    width="27"
                    height="32"
                    viewBox="0 0 27 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M20.6385 3.66797H24.6252L15.8718 14.4288L26.0985 29.0262H18.0732L11.7898 20.1555L4.59651 29.0262H0.609844L9.88318 17.5167L0.0898438 3.66797H8.31451L13.9912 11.7714L20.6385 3.66797ZM19.2432 26.4997H21.4532L7.15318 6.10086H4.77851L19.2432 26.4997Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
                <a
                  class="hero__btn hero__btn_sm"
                  href="https://t.me/catfishsolana"
                >
                  <svg
                    width="31"
                    height="37"
                    viewBox="0 0 31 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.8568 7.73511C26.8568 7.73511 29.3863 6.78824 29.1755 9.08779C29.1052 10.0347 28.4729 13.3487 27.981 16.9334L26.2947 27.5519C26.2947 27.5519 26.1542 29.1075 24.8894 29.378C23.6246 29.6485 21.7276 28.4312 21.3762 28.1606C21.0952 27.9577 16.1065 24.9142 14.3498 23.4262C13.858 23.0204 13.2959 22.2088 14.4201 21.2619L21.7978 14.4986C22.641 13.6869 23.4841 11.7932 19.9709 14.0927L10.134 20.518C10.134 20.518 9.0098 21.1943 6.90192 20.5856L2.33475 19.2329C2.33475 19.2329 0.648412 18.2184 3.52923 17.2039C10.5556 14.0251 19.1981 10.7786 26.8568 7.73511Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a class="hero__btn hero__btn_sm" href="https://dextools.io/">
                  <svg
                    width="26"
                    height="36"
                    viewBox="0 0 26 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.3382 4.69252C18.0489 5.59458 19.4485 6.3579 19.4482 6.38895C19.4475 6.46908 15.3424 8.57347 15.1967 8.56834C15.1304 8.5661 14.6496 8.34207 14.1283 8.07056L13.1803 7.577L12.145 8.11569L11.1097 8.65448L9.41425 7.88331C6.85953 6.72127 6.59419 6.59393 6.63579 6.55115C6.69097 6.49439 7.6073 5.9961 10.0934 4.67126C11.2948 4.03095 12.461 3.40314 12.6848 3.27611C12.9087 3.14907 13.1224 3.04688 13.1597 3.04886C13.197 3.05083 14.6274 3.79049 16.3382 4.69252ZM23.8414 8.62551L25.6223 9.55664V13.6432C25.6223 15.8908 25.5989 17.7297 25.5702 17.7297C25.5416 17.7297 24.6654 17.3452 23.6232 16.8753L21.7282 16.021V11.7135L20.8021 12.2242C20.0885 12.6174 19.3745 13.0097 18.6601 13.4013L17.4441 14.0677L16.903 13.8201C16.5637 13.6645 16.225 13.5074 15.887 13.3488C15.6258 13.2257 14.9847 12.9334 14.4624 12.6991C13.94 12.4648 13.4564 12.2291 13.3879 12.1754C13.2968 12.1041 14.4074 11.4828 17.4959 9.87743C19.8239 8.66732 21.8033 7.68107 21.8946 7.68579C21.9858 7.69052 22.8619 8.11334 23.8414 8.62551ZM6.31483 8.88699C7.52771 9.44123 8.52091 9.91686 8.52204 9.94398C8.5231 9.97107 7.86204 10.3689 7.05293 10.828C6.24389 11.2872 5.5819 11.6874 5.5819 11.7175C5.5819 11.7476 6.29784 12.0987 7.17277 12.498C8.04782 12.8971 10.2596 13.9082 12.0879 14.7448L18.214 17.5478C19.755 18.2529 21.144 18.8885 21.3007 18.9604C24.4484 20.4027 25.3135 20.8029 25.4323 20.8716C25.5518 20.9408 25.5789 21.3426 25.6001 23.3594L25.6255 25.7648L24.033 26.5862L22.4405 27.4075L20.2323 26.3987C19.0177 25.8439 18.024 25.3609 18.024 25.3254C18.024 25.2899 18.2485 25.1419 18.5226 24.9963C18.797 24.8507 19.3632 24.5284 19.7811 24.28C20.199 24.0315 20.6157 23.8036 20.7072 23.7733C20.7986 23.7432 20.8721 23.6904 20.8706 23.656C20.8691 23.6217 19.8967 23.1542 18.7099 22.617C16.4046 21.5737 14.6405 20.7696 10.8532 19.0359C9.15962 18.2609 7.46584 17.4863 5.77186 16.7121C4.28308 16.0319 2.55211 15.2375 1.92524 14.9467L0.785499 14.4181L0.76016 11.9853L0.734689 9.55261L2.3499 8.71342C3.2383 8.25191 3.99766 7.87543 4.03748 7.8768C4.07726 7.87808 5.10206 8.33261 6.31483 8.88699ZM1.21824 17.6636C1.45626 17.7813 1.9264 18.0016 2.26298 18.1532C2.59957 18.3048 3.2383 18.5965 3.68234 18.8016L4.48966 19.1743L4.50808 21.3101C4.51825 22.4847 4.56097 23.4406 4.60304 23.4344C4.6986 23.42 6.21169 22.6345 7.73267 21.8095C8.83044 21.2142 8.8994 21.1905 9.15735 21.3198C9.30647 21.3946 10.1978 21.7993 11.1381 22.2192C12.0784 22.6391 12.8784 23.01 12.916 23.0436C12.9535 23.0772 11.0611 24.1154 8.71047 25.351L4.43673 27.5974L2.61107 26.6414C1.60706 26.1157 0.753304 25.6362 0.713988 25.5759C0.625485 25.4403 0.63307 17.431 0.721672 17.4418C0.756716 17.4461 0.980225 17.5459 1.21824 17.6636ZM11.3281 27.0644C11.6447 27.2022 11.9613 27.3403 12.2778 27.4785C13.2336 27.897 13.0463 27.9109 14.1834 27.3379C14.9407 26.9563 15.2672 26.8386 15.4089 26.8957C15.5152 26.9386 16.4299 27.3551 17.4418 27.8214C18.4536 28.2877 19.3166 28.6692 19.3595 28.6692C19.784 28.6692 19.0783 29.096 16.3549 30.4866L13.1609 32.1173L11.8171 31.4457C11.078 31.0763 9.58722 30.3367 8.50418 29.8021C7.42125 29.2673 6.54858 28.8159 6.56491 28.7989C6.58137 28.7819 7.48879 28.3102 8.58149 27.7507L10.5682 26.7336L11.3281 27.0644Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
     
    </section>
  )
}

export default Hero;

// const [message, setMessage] = useState(0);
//   const MESSAGES = [
//       'Seems like\nu planned a date\nwith someone',
//       'did you ever talk\nto a catfish?',
//       'I’LL BE YOUR LAST\nCATFISH TONIGHT',
//     ];
  // useEffect(() => {
  //   const lang = document.querySelector('.lang');
  //   const messageElement = document.querySelector('.hero-message__text');

  //   if (lang) {
  //     lang.addEventListener('click', () => {
  //       lang.classList.toggle('lang_active');
  //     });
  //   }

  //   const contract = document.querySelector('.contract__value strong')?.innerHTML.trim();
  //   navigator.clipboard.writeText(contract);

  //   // Update message on initial render
  //   messageElement.innerHTML = MESSAGES[message % MESSAGES.length];

  //   const intervalId = setInterval(() => {
  //     setMessage((prevMessage) => (prevMessage + 1) % MESSAGES.length);
  //     messageElement.innerHTML = MESSAGES[message];
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [message]); // Empty dependency array can be replaced with message
  // const handleCopy = () => {
  //   const contract = document.querySelector('.contract__value strong')?.innerHTML.trim();
  //   navigator.clipboard.writeText(contract).then(() => {
  //     // Success message (optional)
  //   }, () => {
  //     // Handle write permission errors (optional)
  //   });
  // };
