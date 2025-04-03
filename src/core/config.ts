const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const WS_SERVER_URL = import.meta.env.VITE_WS_SERVER_URL;

const Local_Storage_Keys: LocalStorageKeysObject = {
  token: 'circle-token',
  user: 'circle-user',
  language: 'circle-language',
  subscription: 'circle-subscribe',
  theme: 'circle-theme',
};

export { Local_Storage_Keys, SERVER_URL, WS_SERVER_URL };
