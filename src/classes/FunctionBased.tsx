import { useEffect } from "react";

export const FunctionBased = ({ num }: { num: number }) => {
  useEffect(() => {
    console.log("Function based component constructed");
    return () => console.log("Function component deconstructed");
  }, []);

  return <h1>Function based component #{num}</h1>;
};
