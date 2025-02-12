const AUTH_TOKEN_KEY_NAME = 'escape-room-token';

const getToken = (): string => localStorage.getItem(AUTH_TOKEN_KEY_NAME) ?? '';
const saveToken = (token: string): void => localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
const dropToken = (): void => localStorage.removeItem(AUTH_TOKEN_KEY_NAME);

export { getToken, saveToken, dropToken };
