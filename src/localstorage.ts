export const saveTextToLocalStorage = (text: string, key: string) => {
  localStorage.setItem(key, text);
};

export const getTextFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};