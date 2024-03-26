
import './App.css';
import Community from './components/Community/Community';
import Hero from './components/Hero/Hero';
import Ready from "./components/Ready/Ready"
import Tokenomics from "./components/Tokenomics/Tokenomics"
import Footer from "./components/Footer/Footer"


// const lang = document.querySelector('.lang');
// lang.addEventListener('click', () => {
//   lang.classList.toggle('lang_active');
// });

// function writeContract() {
//   const contract = document
//     .querySelector('.contract__value strong')
//     .innerHTML.trim();
//   navigator.clipboard.writeText(contract);
// }

// let CURRENT_MESSAGE = 0;
// const MESSAGES = [
//   'Seems like\nu planned a date\nwith someone',
//   'did you ever talk\nto a catfish?',
//   'I’LL BE YOUR LAST\nCATFISH TONIGHT',
// ];

// setInterval(() => {
//   CURRENT_MESSAGE++;
//   document.querySelector('.hero-message__text').innerHTML =
//     MESSAGES[CURRENT_MESSAGE % MESSAGES.length];
// }, 5000);

// window.onload = () => {
//   document.querySelector('.hero-message__text').innerHTML =
//     MESSAGES[CURRENT_MESSAGE % MESSAGES.length];
// };


function App() {

  return (
    <body className="wrapper">
      <Hero />
      <Community />
      <Tokenomics />
      <Ready />
      <Footer />
    </body>
  );
}

export default App;
