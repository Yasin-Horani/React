"use client";

import { useRef } from "react";

function HooksPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    alert(inputRef.current?.value);
    inputRef.current!.value = "";
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
export default HooksPage;
