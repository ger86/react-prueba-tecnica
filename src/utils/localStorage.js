class LocalStorage {
  get = (key) => window.localStorage.getItem(key);
  set = (key, value) => window.localStorage.setItem(key, value);
  delete = (key) => window.localStorage.removeItem(key);
}

const localStorage = new LocalStorage();

export default localStorage;
