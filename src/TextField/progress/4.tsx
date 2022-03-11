import React from "react";

interface UserInfo {
  name: string;
  age: number;
}

interface Props {
  user: UserInfo;
  specialGreeting?: string;
}

const TextField: React.FC<Props> = ({ user, specialGreeting }) => {
  const displayUser = (user: UserInfo) => `${user.name} - ${user.age}`;

  return (
    <div>
      <p>{specialGreeting || "Hello!"}</p>
      <p>{displayUser(user)}</p>
    </div>
  );
};

export default TextField;

// 4. Separate Typing Logic
