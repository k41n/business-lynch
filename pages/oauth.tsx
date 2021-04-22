import { ACCESS_TOKEN_URL } from 'constants/api';
import { TOKEN_COOKIE, UTM_COOKIE } from 'constants/keys';
import { MAIN_PATH } from 'constants/routes';
import cookie from 'cookie';
import { cache } from 'helpers/cache';
import { initOAuth } from 'helpers/initOauth';
import querystring from 'querystring';

interface Token {
  oauth_token: string;
  oauth_token_secret: string;
}

export const getServerSideProps = async ({ req, res, query }) => {
  const request_data = {
    url: ACCESS_TOKEN_URL,
    method: 'POST',
    data: { oauth_verifier: query.oauth_verifier },
  };

  const cookies = cookie.parse(req.headers.cookie);
  const utm = cookies[UTM_COOKIE];
  const tempToken: Token = await cache.get(`utm_${utm}`);
  console.log('key: ', process.env.NEXT_PUBLIC_API_KEY);
  console.log('secret: ', process.env.NEXT_PUBLIC_API_SECRET);
  console.log('Read cache', utm, tempToken);
  await cache.delete(`utm_${utm}`);
  const oauth = initOAuth();

  const token = {
    key: tempToken.oauth_token,
    secret: tempToken.oauth_token_secret,
  };

  const headers = oauth.toHeader(oauth.authorize(request_data, token));
  console.log('Headers', headers);
  console.log('request_data', request_data);

  const fetchResult = await fetch(request_data.url, {
    method: 'POST',
    headers: headers as unknown as HeadersInit,
  });
  const responseText = await fetchResult.text();
  console.log('Response', responseText);
  const parsedAuthToken = querystring.parse(responseText);
  res.setHeader('Set-Cookie', cookie.serialize(TOKEN_COOKIE, JSON.stringify(parsedAuthToken), {
    path: '/',
    maxAge: 60 * 60 * 24 * 7 // 1 week
  }));
  res.writeHead(302, { Location: MAIN_PATH });
  res.end();

  return { props: {} };
};

// We will always process this on the server-side
const Oauth = () => null;
export default Oauth;
