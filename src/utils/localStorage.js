import { isTokenExpired } from './checkToken';
export const setToken = payload => {
  try {
    const token = JSON.stringify(payload);
    localStorage.setItem('mm-token', token);
  } catch {
    return undefined;
  }
};

export const getToken = () => {
  try {
    const token = localStorage.getItem('mm-token');
    if (token === null) {
      return undefined;
    } else {
      const isExpired = isTokenExpired(token); // Check if token is expired
      if (isExpired) {
        clearLocalStorage();
        return undefined;
      }
    }
    return JSON.parse(token);
  } catch {
    return undefined;
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem('mm-token');
  window.location.href = '/';
};
