import { MyBig } from "@/lib/big";

export const toCent = (amount: number) => new MyBig(amount).mul(100).toNumber();

export const fromCent = (centAmount: number) =>
  new MyBig(centAmount).div(100).round(2).toNumber();

export const toCurrencyFromCent = (centAmount: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(fromCent(centAmount));
