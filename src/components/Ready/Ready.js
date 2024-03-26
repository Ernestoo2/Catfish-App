import React from 'react';
import ready_contract_background from "./images/ready/ready-contract-background.svg";
import ready_top from "./images/ready/ready-top.png"
import "./_ready.scss";
import "../../scss/_fonts.scss";
import "../../scss/_margue.scss";
import "../../scss/_common.scss";
const Ready = () => {
  return (
    <section class="ready">
        <img class="ready__top" src={ready_top} alt="" />
        <div class="ready__container container">
          <div class="ready__col">
            <h2 class="ready__title">YOUR FAVOURITE SHITCOIN JUST RUGGED U?</h2>
            <p class="ready__text">
              $CATFISH has had enough of the crypto circus, with its endless
              cycle of empty promises and despair. We are a testament to the joy
              of the unexepected. Fortune favours the brave.
            </p>
            <div class="ready__contract contract">
            <img
                class="contract__background"
                src={ready_contract_background}
                alt=""
              />
              <div class="contract__value">
                <span class="contract__label">Contract address:</span>
                <strong>AcY6RWuWKM5NU7BeSE4c4zQxBZpyU7pTLNF3g5DTWUC2</strong>
              </div>
              <button class="contract__copy" onclick="writeContract()">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Ready;