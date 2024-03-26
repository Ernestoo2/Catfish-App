import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const lang = document.querySelector('.lang');
    lang.addEventListener('click', () => {
      lang.classList.toggle('lang_active');
    });

    const contract = document.querySelector('.contract__value strong')?.innerHTML.trim();
    navigator.clipboard.writeText(contract);

    // Update message on initial render and interval
    document.querySelector('.hero-message__text').innerHTML = MESSAGES[currentMessage % MESSAGES.length];

    const intervalId = setInterval(() => {
      setCurrentMessage((prevMessage) => (prevMessage + 1) % MESSAGES.length);
      document.querySelector('.hero-message__text').innerHTML = MESSAGES[currentMessage];
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []); // Empty dependency array ensures useEffect runs only once

  // ... rest of your component logic

  return (
    // ... your JSX returning the component structure
  );
};

export default MyComponent;
