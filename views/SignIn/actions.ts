import { AUTHORIZE_URL } from "constants/api";

const requestTokenFromApi = async () => {
  const apiResult = await fetch('/api/requestToken');
  return apiResult.json();
}

export const handleSignIn = async () => {
  const tempToken = await requestTokenFromApi();
  const authURL = `${AUTHORIZE_URL}?oauth_token=${tempToken.oauth_token}`;
  location.href = authURL
};
