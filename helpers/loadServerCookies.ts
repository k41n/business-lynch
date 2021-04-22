import cookie from 'react-cookies';

export const loadServerCookies = (context: any) => {
  cookie.setRawCookie(context.req.headers.cookie);
}