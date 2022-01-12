import { NEXT_PUBLIC_SERVER_DOMAIN } from "utils/env";

const dev = process.env.NODE_ENV !== "production";
const server = dev ? "http://localhost:3000" : NEXT_PUBLIC_SERVER_DOMAIN;

const api = <T>(url: string): Promise<T> => {
  return fetch(`${server}/api/${url}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json().then((data) => data as T);
  });
};

export { api };
