import { getEditorToken } from 'cacoo/getEditorToken';
import { editorUrl } from 'constants/api';

export const handleReviewSubmit = async (diagramId: string) => {
  const { token: editorToken } = await getEditorToken(diagramId);
  return editorUrl(diagramId, editorToken);
};
