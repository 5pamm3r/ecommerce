import React, { SetStateAction, useState } from 'react';

const useLocalStorage = <T>(key: string, initialValue: T): [T, React.Dispatch<SetStateAction<T>>] => {
  if (typeof window !== 'undefined') {
    const [storedValue, setStoredValue] = useState<T>(() => {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    });

    const setValue: React.Dispatch<SetStateAction<T>> = (value) => {
      try {
        setStoredValue((prevValue) => {
          const newValue = typeof value === 'function' ? (value as Function)(prevValue) : value;
          localStorage.setItem(key, JSON.stringify(newValue));
          return newValue;
        });
      } catch (error) {
        console.error(error);
      }
    };

    return [storedValue, setValue];
  }

  return [initialValue, () => { }]; // Valor de retorno por defecto si typeof window === 'undefined'
};

export { useLocalStorage };
