import React from "react";

const TextField: React.FC<{
  user: {
    name: string;
    age: number;
  };
  specialGreeting?: string;
}> = ({ user, specialGreeting }) => {
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

// 3. Display an optional special greeting
