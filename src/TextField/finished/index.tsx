import React, { useRef, useState } from "react";
import { Props, UserInfo, handleClickType } from "./types";

const TextField: React.FC<Props> = ({ user, specialGreeting }) => {
  const [count, setCount] = useState<number | "Good Job!">(5);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const displayUser = (user: UserInfo) => `${user.name} - ${user.age}`;

  const handleClick: handleClickType = (e) => {
    e.preventDefault();

    setCount((prev) => {
      if (typeof prev === "number" && prev < 10) return prev + 1;
      return "Good Job!";
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
