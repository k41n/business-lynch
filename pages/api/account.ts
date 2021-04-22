import { ACCOUNT_URL } from 'constants/api';
import { signedRequest } from './signedRequest';

export default async (req, res) => {
  return signedRequest(ACCOUNT_URL, req, res);
};
