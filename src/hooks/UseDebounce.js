import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after the specified delay
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear the timeout if the value changes before the delay
    return () => clearTimeout(timeoutId);
  }, [value, delay]); // Re-run effect whenever value or delay changes

  return debouncedValue;
}

export default useDebounce;