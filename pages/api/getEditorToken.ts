import { editorTokenUrl } from 'constants/api';
import { signedRequest } from './signedRequest';

export default async (req, res) => {
  const { diagramId } = req.body;
  return signedRequest(editorTokenUrl(diagramId), req, res);
};

