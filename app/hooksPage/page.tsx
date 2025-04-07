"use client";
import { log } from "console";
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
// This effect runs when the component mounts and when the `success` state changes
  useEffect(() => {
    console.log("Welcome to the Hooks Page!");
    alert("Welcome to the Hooks Page!");
  }, [success]);
 
  
  // This effect runs when the component mounts and when the `counter` state changes
  useEffect(() => {
    console.log("counter is 10!");	
    alert("coutner is 10!");
  }, [counter === 10]);


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
