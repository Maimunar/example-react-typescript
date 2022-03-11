import React, { useRef } from "react";

interface UserInfo {
  name: string;
  age: number;
}

interface Props {
  user: UserInfo;
  specialGreeting?: string;
}

const TextField: React.FC<Props> = ({ user, specialGreeting }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <p>{specialGreeting || "Hello!"}</p>
      <p>
        {user.name} - {user.age}
      </p>
      <button ref={buttonRef}>+</button>
    </div>
  );
};

export default TextField;

// 5. Add a button with a reference to it
