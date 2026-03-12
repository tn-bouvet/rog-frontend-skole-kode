import { useState } from "react";

export const FunctionComponent = ({
  onSubmit,
}: {
  onSubmit?: (email: string, password: string) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const comps = (
    <div className="wrapper">
      <span>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </span>
      <span>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </span>
      <button onClick={() => onSubmit?.(email, password)}>Submit</button>
    </div>
  );

  console.log("Functional", comps);

  return comps;
};
