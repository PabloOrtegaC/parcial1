import { useState, useEffect } from 'react';

const useMenu = () => {
  const [menu, setMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://my.api.mockaroo.com/menu.json?key=184ef1a0')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.photos && typeof data.photos === 'string') {
          data.photos = [data.photos];
        }
        setMenu(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { menu, loading, error };
};

export default useMenu;