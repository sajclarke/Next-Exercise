import { useState } from "react";

//TODO: How would you improve this component and fix any errors in the code?
export const LoginForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        name="email"
        placeholder="Type Email"
        value={email}
        onChange={handleInputChange}
        className="border rounded-sm"
      />

      <input
        type="text"
        name="password"
        placeholder="Type Password"
        value={password}
        onChange={handleInputChange}
        className="border rounded-sm"
      />

      <button type="button">Submit</button>
    </form>
  );
};
