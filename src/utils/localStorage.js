export const setToken = payload => {
  try {
    const token = JSON.stringify(payload);
    localStorage.setItem('mm-token', token);
  } catch {
    return undefined;
  }
};
