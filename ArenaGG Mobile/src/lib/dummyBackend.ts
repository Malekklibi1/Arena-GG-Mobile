// Dummy backend for Expo/React Native only version
export const saveData = async (key: string, value: any) => {
  // Use AsyncStorage or local state for persistence
  return Promise.resolve();
};
export const getData = async (key: string) => {
  // Use AsyncStorage or local state for persistence
  return Promise.resolve(null);
};
