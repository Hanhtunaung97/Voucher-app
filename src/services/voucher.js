import { getCookie } from "react-use-cookie";

const token = getCookie("my_token");
export const fetchVouchers = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());

export const destroyVoucher = (id) => {
  return fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
