import React, { useRef, useState } from "react";

interface UserInfo {
  name: string;
  age: number;
}

interface Props {
  user: UserInfo;
  specialGreeting?: string;
}

type handleClickType = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => void;

const TextField: React.FC<Props> = ({ user, specialGreeting }) => {
  const [count, setCount] = useState(5);

  const buttonRef = useRef<HTMLButtonElement>(null);

  const displayUser = (user: UserInfo) => `${user.name} - ${user.age}`;

  const handleClick: handleClickType = (e) => {
    e.preventDefault();

    setCount((prev) => prev + 1);
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

// 6. Add increment functionality
