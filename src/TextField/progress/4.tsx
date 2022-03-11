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
  return (
    <div>
      <p>{specialGreeting || "Hello!"}</p>
      <p>
        {user.name} - {user.age}
      </p>
    </div>
  );
};

export default TextField;

// 4. Separate Typing Logic
