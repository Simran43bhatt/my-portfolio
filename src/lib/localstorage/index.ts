const STORAGE_KEYS = {
  EVENT_LOGGER_GENERATED_ID: "event_logger_generated_id",
  EVENT_LOGGER_USER_ID: "event_logger_user_id",
} as const;

export interface StorageTypes {
  [STORAGE_KEYS.EVENT_LOGGER_GENERATED_ID]: string;
  [STORAGE_KEYS.EVENT_LOGGER_USER_ID]: string;
}

export type StorageKey = keyof StorageTypes;

export const getItem = <K extends StorageKey>(
  key: K
): StorageTypes[K] | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Error getting localStorage item ${key}:`, error);
    return null;
  }
};

export const setItem = <K extends StorageKey>(
  key: K,
  value: StorageTypes[K]
): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error setting localStorage item ${key}:`, error);
  }
};

export const removeItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing localStorage item ${key}:`, error);
  }
};

export const clearAll = (): void => {
  try {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error("Error clearing localStorage:", error);
  }
};

export { STORAGE_KEYS };
