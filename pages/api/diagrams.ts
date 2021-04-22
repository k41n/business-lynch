import { DIAGRAMS_URL } from 'constants/api';
import { signedRequest } from './signedRequest';

export default async (req, res) => {
  return signedRequest(DIAGRAMS_URL, req, res);
};

