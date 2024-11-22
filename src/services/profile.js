import { getCookie } from "react-use-cookie";

const token = getCookie("my_token");
export const updateImage = (formData) => {
  return fetch(
    import.meta.env.VITE_API_URL + "/user-profile/change-profile-image",
    {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );
};
export const updateName = (data) => {
  return fetch(import.meta.env.VITE_API_URL + "/user-profile/change-name", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};
export const updatePassword = (data) => {
  return fetch(import.meta.env.VITE_API_URL + "/user-profile/change-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};
