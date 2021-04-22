import cookie from 'react-cookies';

export const useIsAuthenticated = () => {
  const cookies = cookie.loadAll();
  return !!cookies.cacooToken;
}