import CryptoJS from 'crypto-js';
import OAuth from 'oauth-1.0a';

const sha1 = (base_string: string, key: string) => CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);

export const initOAuth = () =>
  new OAuth({
    consumer: {
      key: process.env.NEXT_PUBLIC_API_KEY,
      secret: process.env.NEXT_PUBLIC_API_SECRET,
    },
    signature_method: 'HMAC-SHA1',
    hash_function: sha1,
  });

