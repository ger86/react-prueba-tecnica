import localStorage from 'utils/localStorage';

const LEGIT_AUTH_TOKENS_KEY = 'LALIGA_AUTH_TOKENS_KEY';

class AuthTokensLocalStorage {
  isStored = () => !!localStorage.get(LEGIT_AUTH_TOKENS_KEY);
  get = () => {
    const tokens = localStorage.get(LEGIT_AUTH_TOKENS_KEY);
    if (tokens) {
      return JSON.parse(tokens);
    }
    return null;
  };
  set = (tokens) => localStorage.set(LEGIT_AUTH_TOKENS_KEY, JSON.stringify(tokens));
  delete = () => localStorage.delete(LEGIT_AUTH_TOKENS_KEY);
}

const authTokensLocalStorage = new AuthTokensLocalStorage();

export default authTokensLocalStorage;
