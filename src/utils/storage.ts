export const loadState = <T>(key: string): T | undefined => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as T;
  } catch (error) {
    console.error("Error while loading state from localStorage:", error);
    return undefined;
  }
};

export const persistState = <T>(
  key: string,
  state: T,
  callback: (state: T) => void
): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(key, serializedState);
    callback(state);
  } catch (error) {
    console.error("Error while saving state to localStorage:", error);
  }
};
