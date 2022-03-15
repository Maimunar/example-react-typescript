import React, { useRef, useState } from "react";

const TextField = ({ user, specialGreeting }) => {
  const [count, setCount] = useState(5);

  const buttonRef = useRef();

  const displayUser = (user) => `${user.name} - ${user.age}`;

  const handleClick = (e) => {
    e.preventDefault();

    setCount((prev) => {
      // if (prev < 10)
      return prev + 1;
      // return "Good Job!";
    });
  };

  return (
    <div>
      <p>{specialGreeting || "Hello!"}</p>
      <p>{displayUser(user)}</p>
      <button ref={buttonRef} onClick={handleClick}>
        +
      </button>
      <p>{count}</p>
    </div>
  );
};

export default TextField;
