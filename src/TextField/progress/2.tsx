import React from "react";

const TextField: React.FC<{ user: { name: string; age: number } }> = ({
  user,
}) => {
  return (
    <div>
      <p>
        {user.name} - {user.age}
      </p>
    </div>
  );
};

export default TextField;

// 2. Display a user with a name and age
