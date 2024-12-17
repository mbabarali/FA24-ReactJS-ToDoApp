import { DB_URL } from "./constants";

export function getTasks() {
  // "fetch" API (Browser API)
  // const resPromise = fetch(DB_URL + "tasks"); // [default] GET
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

export function putTask(id, overwrite) {
  // const resPromise = fetch(DB_URL + `tasks/${id}`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "application/json;charset=utf-8",
  //   },
  //   body: JSON.stringify(overwrite),
  // });

  // Request and Headers constructors
  const reqHeaders = new Headers();
  reqHeaders.append("Content-Type", "application/json");
  reqHeaders.append("Content-Type", "charset=utf-8");

  const url = DB_URL + `tasks/${id}`;
  const method = "PUT";
  const body = JSON.stringify(overwrite);
  const headers = reqHeaders;
  // console.log(...reqHeaders);

  // [RequestInit]
  const reqInitOptions = {
    url,
    method,
    headers,
    body,
  };

  const req = new Request(url, reqInitOptions);
  const resPromise = fetch(req);

  return resPromise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export function patchTask(id, patch) {
  const resPromise = fetch(DB_URL + `tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(patch),
  });

  return resPromise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export function postTask(create) {
  const resPromise = fetch(DB_URL + `tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(create),
  });

  return resPromise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export function deleteTask(id) {
  const resPromise = fetch(DB_URL + `tasks/${id}`, {
    method: "DELETE",
  });

  return resPromise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}
