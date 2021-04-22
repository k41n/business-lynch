import React from 'react';
import { fetchCacoo } from './fetchCacoo';

export const useCacooUser = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(undefined);
  const [user, setUser] = React.useState(undefined);

  React.useEffect(() => {
    fetchCacoo('/api/account')
      .then((json) => {
        setLoading(false);
        setUser(json);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { loading, error, user };
};
