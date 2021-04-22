import React from 'react';
import { SIGN_IN_PATH } from 'constants/routes';
import { CookiesContext } from 'contexts/cookiesContext';
import { useRouter } from 'next/router';
import { TOKEN_COOKIE } from 'constants/keys';

export const AuthGuard: React.FC = () => {
  const cookies = React.useContext(CookiesContext);
  const router = useRouter();

  if (cookies[TOKEN_COOKIE]) return null;

  React.useEffect(() => {
    router.push(SIGN_IN_PATH);
  })

  return null;
}