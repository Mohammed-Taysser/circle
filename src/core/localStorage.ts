import { Local_Storage_Keys } from './config';

class LocalStorage {
  // Check if a key exists in localStorage const

  // Set a value in localStorage
  static set<T = null>(key: LocalStorageKeys, value: T): void {
    if (!(key in Local_Storage_Keys)) {
      console.error(`Error parsing localStorage value for key "${key}":`);

      return;
    }

    localStorage.setItem(Local_Storage_Keys[key], JSON.stringify(value));
  }

  // Get a value from localStorage with an optional default value
  static get<T = null>(key: LocalStorageKeys, defaultValue?: T): T | null {
    if (key in Local_Storage_Keys) {
      const storedValue = localStorage.getItem(Local_Storage_Keys[key]);

      if (storedValue === null) {
        return defaultValue ?? null;
      }

      try {
        return JSON.parse(storedValue) as T;
      } catch (error) {
        console.error(
          `Error parsing localStorage value for key "${key}":`,
          error
        );
        return defaultValue ?? null;
      }
    } else {
      console.error(`Error parsing localStorage value for key "${key}":`);
      return null;
    }
  }

  // Remove an item from localStorage
  static remove(key: LocalStorageKeys): void {
    if (!(key in Local_Storage_Keys)) {
      console.error(`Error parsing localStorage value for key "${key}":`);

      return;
    }

    localStorage.removeItem(Local_Storage_Keys[key]);
  }
}

export default LocalStorage;
