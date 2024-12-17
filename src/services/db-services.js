import { DB_URL } from "./constants";

const throwError = (res, tag = "ERROR") => {
  let err = new Error(`[${tag}]: ${res.status}, ${res.statusText}`);
  err.response = res; // Error along with response
  throw err;
};

const throwTypeError = (res, tag = "ERROR") => {
  let err = new TypeError(`[${tag}]: ${res.status}, ${res.statusText}`);
  err.response = res; // Error along with response
  throw err;
};

export function getTasks() {
  // "fetch" API (Browser API)
  // const resPromise = fetch(DB_URL + "tasks"); // [default] GET
  const resPromise = fetch(DB_URL + "tasks", { method: "get" });

  return resPromise.then((response) => {
    // console.log(response);

    if (!response.ok) {
      // Unsuccessful responses (Except 200 – 299)
      // throw new Error(`[GET-ERROR]: ${response.status}, ${response.statusText}`);
      throwError(response, "GET-ERROR");
    } else {
      // Successful responses (200 – 299)
      console.log(`[GET-SUCCESS]: ${response.status}, ${response.statusText}`);

      if (response.headers.get("Content-Type").includes("application/json")) {
        return response.json();
      }

      throwTypeError(response, "GET-ERROR");
    }
  });
  // .then((data) => {
  //   // console.log(data);
  //   return data;
  // });
  // Error handling in caller
  // .catch((err) => {
  //   console.error(err);
  // });
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

  return resPromise.then((response) => {
    if (!response.ok) {
      throwError(response, "PUT-ERROR");
    } else if (
      response.headers.get("Content-Type").includes("application/json")
    ) {
      console.log(`[PUT-SUCCESS]: ${response.status}, ${response.statusText}`);
      return response.json();
    } else {
      throwTypeError(response, "PUT-ERROR");
    }
  });
  // Doing nothing
  // .then((data) => {
  //   return data;
  // });
}

export function patchTask(id, patch) {
  const resPromise = fetch(DB_URL + `tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(patch),
  });

  return resPromise.then((response) => {
    if (!response.ok) {
      throwError(response, "PATCH-ERROR");
    } else if (
      response.headers.get("Content-Type").includes("application/json")
    ) {
      console.log(
        `[PATCH-SUCCESS]: ${response.status}, ${response.statusText}`
      );
      return response.json();
    } else {
      throwTypeError(response, "PATCH-ERROR");
    }
  });
  // Doing nothing
  // .then((data) => {
  //   return data;
  // });
}

export function postTask(create) {
  const resPromise = fetch(DB_URL + `tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(create),
  });

  return resPromise.then((response) => {
    if (!response.ok) {
      throwError(response, "POST-ERROR");
    } else {
      // Successful responses (200 – 299)
      if (response.status === 201) {
        console.log("New resource was created.");
        console.log(
          `[POST-SUCCESS]: ${response.status}, ${response.statusText}`
        );
      } else {
        throwError(response, "POST-ERROR");
      }

      if (response.headers.get("Content-Type").includes("application/json")) {
        return response.json();
      } else {
        throwTypeError(response, "POST-ERROR");
      }
    }
  });
  // Doing nothing
  // .then((data) => {
  //   return data;
  // });
}

export function deleteTask(id) {
  const resPromise = fetch(DB_URL + `tasks/${id}`, {
    method: "DELETE",
  });

  return resPromise.then((response) => {
    if (!response.ok) {
      throwError(response, "DELETE-ERROR");
    } else if (
      response.headers.get("Content-Type").includes("application/json")
    ) {
      console.log(
        `[DELETE-SUCCESS]: ${response.status}, ${response.statusText}`
      );
      return response.json();
    } else {
      throwTypeError(response, "DELETE-ERROR");
    }
  });
  // Doing nothing
  // .then((data) => {
  //   return data;
  // });
}
