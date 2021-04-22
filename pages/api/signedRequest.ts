import { TOKEN_COOKIE } from 'constants/keys';
import cookie from 'cookie';
import { initOAuth } from 'helpers/initOauth';

export const signedRequest = async (
  url: string,
  req: any,
  res: any,
  method: string = 'GET',
  data: any = undefined
) => {
  try {
    const cookies = cookie.parse(req.headers.cookie);
    const userToken = JSON.parse(cookies[TOKEN_COOKIE]);

    const request_data = {
      url: url,
      method: method,
      ...( data ? { data } : {})
    };

    const oauth = initOAuth();
    const token = {
      key: userToken.oauth_token,
      secret: userToken.oauth_token_secret,
    };

    const headers = oauth.toHeader(oauth.authorize(request_data, token));

    const fetchResult = await fetch(request_data.url, {
      method: method,
      headers: (headers as unknown) as HeadersInit,
      ...( data ? { body: JSON.stringify(data) } : {})
    });
    const responseJSON = await fetchResult.json();
    res.json(responseJSON);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};
