import React, { useState } from "react";

export default function CounterReact({ title }) {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(1000);

  const add = () => {
    const newCount = count + 1;
    setCount(newCount);
    setPrice(newCount * 1000);
  };

  const subtract = () => {
    const newCount = count - 1;
    setCount(newCount);
    setPrice(count * 1000);
  };

  const checkout = () => {
    location.href='http://www.google.com'
  }

  return (
    <div className="island">
      <h2 className="mt0">Book now!</h2>
      <h3>{title}</h3>
      <button className="mr10 counter" onClick={subtract}>-</button>
      {count} People
      <button className="ml10 counter" onClick={add}>+</button>
      <span className="ml20">€ {price}</span>
      <button onClick={checkout} className="ml20 checkout">Checkout!</button>
    </div>
  );
}
