export const fetchCacoo = (url: string, data?: any) => {
  return fetch(url, {
    ...(data ? { body: JSON.stringify(data) } : {}),
    method: data ? 'POST' : 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => response.json());
};
