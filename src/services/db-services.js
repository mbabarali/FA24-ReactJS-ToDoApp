import { DB_URL } from "./constants";

export function getTasks() {
  // "fetch" API (Browser API)
  const resPromise = fetch(DB_URL + "tasks", { method: "get" });

  return resPromise
    .then((response) => {
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      // console.log(data);
      return data;
    });
}
