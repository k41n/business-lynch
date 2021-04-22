import { fetchCacoo } from './fetchCacoo';

export const getEditorToken = (diagramId: string) => fetchCacoo('/api/getEditorToken', { diagramId });