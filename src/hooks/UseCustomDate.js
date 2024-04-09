import { useState, useEffect } from 'react';

const useCustomDateFormat = (dateString) => {
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const date = new Date(dateString);
    const now = new Date();

    const diffInMilliseconds = now - date;
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));

    if (diffInHours < 24) {
      if (diffInHours < 1) {
        setFormattedDate(`${diffInMinutes} mins`);
      } else {
        setFormattedDate(`${diffInHours} hr`);
      }
    } else {
      // Format the date to "Month Day" format
      const options = { month: 'short', day: 'numeric' };
      const formatted = date.toLocaleDateString('en-US', options);
      setFormattedDate(formatted);
    }
  }, [dateString]);

  return formattedDate;
};

export default useCustomDateFormat;