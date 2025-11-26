"use server";

import { cookies } from "next/headers";

export const getCookie = async (key: string) => {
  const cookieStore = await cookies();
  return cookieStore.get(key);
};

export const setCookie = async (key: string, value: string) => {
  (await cookies()).set(key, value);
  console.log("cookie set: ", key, value);
};

export const deleteCookie = async (key: string) => {
  (await cookies()).delete(key);
  console.log("cookie deleted: ", key);
};
