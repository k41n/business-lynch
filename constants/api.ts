export const REQUEST_TOKEN_URL = 'https://cacoo.com/oauth/request_token';
export const AUTHORIZE_URL = 'https://cacoo.com/oauth/authorize';
export const ACCESS_TOKEN_URL = 'https://cacoo.com/oauth/access_token';

export const ACCOUNT_URL = 'https://cacoo.com/api/v1/account.json';
export const editorUrl = (diagramId: string, editorToken: string) =>
  `https://cacoo.com/diagrams/${diagramId}/edit?editorToken=${editorToken}`;
export const editorTokenUrl = (diagramId: string) =>
  `https://cacoo.com/api/v1/diagrams/${diagramId}/editor/token.json`;

export const DIAGRAMS_URL = 'https://cacoo.com/api/v1/diagrams.json';
