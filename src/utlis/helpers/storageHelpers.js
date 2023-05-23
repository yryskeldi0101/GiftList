export const getStorageData = (key) => {
   return JSON.parse(localStorage.getItem(key))
}
export const addDataToStorage = (key, item) => {
   return localStorage.setItem(key, item)
}
export const removeItemFromStorage = (key) => {
   return localStorage.removeItem(key)
}
