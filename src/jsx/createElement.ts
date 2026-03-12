import { createElement, useState } from "react";

export const CreateElement = ({
  onSubmit,
}: {
  onSubmit?: (email: string, password: string) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return createElement(
    "div",
    { className: "wrapper" },
    createElement(
      "span",
      {},
      createElement("label", { htmlFor: "email" }, "Email"),
      createElement("input", {
        id: "email",
        value: email,
        onChange: (e) => setEmail(e.target.value),
      }),
    ),
    createElement(
      "span",
      {},
      createElement("label", { htmlFor: "password" }, "Password"),
      createElement("input", {
        id: "password",
        value: password,
        onChange: (e) => setPassword(e.target.value),
      }),
    ),
    createElement(
      "button",
      { onClick: () => onSubmit?.(email, password) },
      "Submit",
    ),
  );
};
