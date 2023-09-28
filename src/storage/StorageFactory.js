// StorageFactory.js
import LocalStorage from './LocalStorage';
import CloudStorage from './CloudStorage';

export function createStorage(type) {
  if (type === 'local') {
    return new LocalStorage();
  } else if (type === 'cloud') {
    return new CloudStorage();
  }
  throw new Error('Invalid storage type');
}

