export const signIn = (data) => {
  return fetch(import.meta.env.VITE_API_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const signUp = (data) => {
  return fetch(import.meta.env.VITE_API_URL + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
};
