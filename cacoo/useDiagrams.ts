import React from 'react';
import { fetchCacoo } from './fetchCacoo';

export const useDiagrams = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(undefined);
  const [diagrams, setDiagrams] = React.useState(undefined);

  React.useEffect(() => {
    fetchCacoo('/api/diagrams')
      .then((json) => {
        setLoading(false);
        setDiagrams(json.result);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { loading, error, diagrams: diagrams || [] };
};

