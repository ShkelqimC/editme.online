export const getToken = () => {
  return localStorage.getItem("EditMe-User-Info");
};
export const removeToken = () => {
  localStorage.removeItem("EditMe-User-Info");
};
export const setToken = (value) => {
  localStorage.setItem("EditMe-User-Info", JSON.stringify(value));
};
