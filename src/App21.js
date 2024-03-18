import React, { useRef } from 'react';

export default function App21() {
  const divRef = useRef(null);
  const handleColorChange = () => {
    divRef.current.style.backgroundColor = 'lightblue';
  };
  return (
    // to set the backgroundColor
    <div ref={divRef}>  
      <p>Hello! Welcom to Lyros</p>
      <button onClick={handleColorChange}>Click</button>
    </div>
  );
};