import { useState as useReactState } from "react";

let hooks: unknown[] = [];
let hookIndex = 0;

export const useState = <T>(initialValue: T) => {
  // React can force a re-render, we have to cheat
  const [, forceRerender] = useReactState(0);

  const currentIndex = hookIndex;
  hookIndex++;

  hooks[currentIndex] = hooks[currentIndex] ?? initialValue;

  const setState = (newValue: T) => {
    hooks[currentIndex] = newValue;
    console.log(hooks);
    forceRerender((d) => d + 1);
  };

  return [hooks[currentIndex] as T, setState] as const;
};

export const resetHooks = () => {
  hookIndex = 0;
};
