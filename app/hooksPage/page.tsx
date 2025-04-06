"use client";
import Link from "next/link";
import { useState } from "react";

function HooksPage() {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    if (counter < 100) {
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={incrementCounter} disabled={counter >= 100}>
        Click to Increment
      </button>
      <br />
      <button onClick={decrementCounter} disabled={counter <= 0}>
        Click to Decrement
      </button>
      <br />
      <Link href="/">
        <strong>go to home</strong>
      </Link>
    </div>
  );
}
export default HooksPage;
