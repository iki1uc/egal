// transwarp.js

export const ROOT_GATE = () => {
  console.log("ROOT-GATE aktiv (global)");
};

export const ROUTE = (respo, mode) => {
  return { respo, mode };
};

