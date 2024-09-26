const generateInvoiceId = () => {
  // Generate current timestamp
  const now = new Date();

  // Get the year, month, day, hour, minute, and second
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Month is zero-based, so +1
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  // Generate a random number to ensure uniqueness
  const randomNumber = Math.floor(Math.random() * 10000); // Random 4-digit number

  // Combine all parts to create a unique invoice ID
  const invoiceId = `INV-${year}${month}${day}-${hour}${minute}${second}-${randomNumber}`;

  return invoiceId;
};
export default generateInvoiceId;

// export const saleDate=()=>{
//   const now = new Date();
//   const date = now.getDate();
//   const month = now.getMonth() + 1;
//   const year = now.getFullYear();
//   const hour = now.getHours();
//   const minute = now.getMinutes();
//   const second = now.getSeconds();
//   const saleDate = `${date}/${month}/${year} ${hour}:${minute}:${second}`;
//   return saleDate;
// }