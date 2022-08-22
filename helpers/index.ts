import { useEffect, useRef } from "react";

export const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const currencyFormat = (currency: any) =>
  Number(currency)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,");

export const checkMinus = (numberData: any) => numberData.includes("-");

export const compareCoin = (
  prevPrice: any,
  getLatestPrice: string,
  setPrevPrice: any,
  setColor: any
) => {
  if (prevPrice === Number(getLatestPrice)) {
    setColor("black");
  } else if (prevPrice < Number(getLatestPrice)) {
    setColor("green");
  } else if (prevPrice > Number(getLatestPrice)) {
    setColor("red");
  }
  setPrevPrice(Number(getLatestPrice));
};

export const getColor = (pair: any, pairText: string, colorChange: string) =>
  `${pair === pairText ? `text-${colorChange}-450` : ""}`;
export const svgExceptIcon = [
  "Raydium",
  "COTI",
  "Convex Finance",
  "STEPN",
  "Kusama",
  "Enjin Coin",
  "Loopring",
  "Lido DAO",
  "Terra 2.0",
];
