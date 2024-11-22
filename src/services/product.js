import { getCookie } from "react-use-cookie";

const token = getCookie("my_token");
export const fetchProducts = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

export const createProduct = (product) => {
  return fetch(`${import.meta.env.VITE_API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  });
};

export const destroyProduct = (id) => {
  return fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const editProduct = (id, editProduct) => {
  return fetch(`${import.meta.env.VITE_API_URL}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(editProduct),
  });
};
