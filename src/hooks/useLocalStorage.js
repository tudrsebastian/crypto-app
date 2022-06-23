import { useState } from "react";

const useLocalStorage = (keyName, defaultlValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyName);
      if (value) {
        return JSON.parse(value);
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultlValue));
      }
    } catch (error) {
      return defaultlValue;
    }
  });
  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue));
    } catch (error) {}
    setStoredValue(newValue);
  };
  return [storedValue, setValue];
};
export { useLocalStorage };
