"use client";

import { log } from "console";
import { useRef } from "react";

function HooksPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // This function will be called when the input value changes
  const handleInputChange = (e) => {
    console.log(e.target.value);  
  }

  return (
    <div>
      <input ref={inputRef} onChange={handleInputChange} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
export default HooksPage;
