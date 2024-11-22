import { getCookie } from "react-use-cookie";
const token = getCookie("my_token");
export const createSale = (currentVoucher) => {
  return fetch(import.meta.env.VITE_API_URL + "/vouchers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(currentVoucher),
  });
};
