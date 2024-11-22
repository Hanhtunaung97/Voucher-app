const urlToParamsObject = (url) => {
  const currentUrl = new URL(url);
  const searchParams = currentUrl.search;
  const newSearchParams = new URLSearchParams(searchParams);
  const objParams = Object.fromEntries(newSearchParams.entries());
  return objParams;
};
export default urlToParamsObject;
