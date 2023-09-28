// LocalStorage.js
import StorageInterface from './StorageInterface';

export default class LocalStorage extends StorageInterface {
  async save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  async retrieve(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  // ... Implement update and delete
}

