import React, { useMemo, useState } from "react";

const Usememo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const Even = () => {
    console.log('clicked');
    let i = 0;
    while(i<2000000000) i++;
    return counterOne%2===0;
  }

  const result = useMemo(()=>{
    Even()
  },[counterOne])

  return (
    <div>
      <button onClick={incrementOne}>Counter = {counterOne}</button>
      <span>{result ? "even" : "odd"}</span>
      <button onClick={incrementTwo}>Counter = {counterTwo}</button>
    </div>
  );
};

export default Usememo;
