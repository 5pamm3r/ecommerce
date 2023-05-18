import React from 'react'

const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
    }
  })
  const setValue = (value: any) => {
    try {
      setStoredValue(value)
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }
  return [storedValue, setValue]
}

export { useLocalStorage }