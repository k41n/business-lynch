import { REQUEST_TOKEN_URL } from 'constants/api';
import { UTM_COOKIE } from 'constants/keys';
import cookie from 'cookie';
import queryString from 'query-string';
import { v4 as uuidv4 } from 'uuid';
import { initOAuth } from 'helpers/initOauth';
import { cache } from 'helpers/cache';

const requestToken = async () => {
  const oauth = initOAuth();
  const request_data = {
    url: REQUEST_TOKEN_URL,
    method: 'POST',
  };

  const headers = oauth.toHeader(oauth.authorize(request_data));

  const fetchResult = await fetch(request_data.url, {
    method: 'POST',
    headers: (headers as unknown) as HeadersInit,
    mode: 'cors',
  });

  const textResult = await fetchResult.text();
  return queryString.parse(textResult);
};

export default async (_req, res) => {
  const utm = uuidv4();
  return requestToken().then(
    (token) => {
      cache.set(`utm_${utm}`, token).then(() => {
        res.setHeader(
          'Set-Cookie',
          cookie.serialize(UTM_COOKIE, utm, {
            httpOnly: true,
            path: '/',
            maxAge: 60 * 60 * 24 * 7, // 1 week
          })
        );
        res.json(token);
      });
    },
    (err) => res.status(500).json(err)
  );
};
