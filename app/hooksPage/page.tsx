"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function HooksPage() {
  const [counter, setCounter] = useState<number>(0);
  // This effect runs when the component mounts and when the `success` or `counter` state changes
  const [success, setSuccess] = useState<boolean>(false);

  const incrementCounter = () => {
    if (counter < 100) {
      setCounter(counter + 1);
      if (counter === 10) {
        setSuccess(true);
      }
    }
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
// This effect runs when the component mounts and when the `success` or `counter` state changes
  useEffect(() => {
    alert("Welcome to the Hooks Page!");
  }, [success, counter]);


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
