const retrieveItem = (key) => {
  if (typeof window !== "undefined" && key) {
    let item = localStorage.getItem(key);
    item = JSON.parse(item);
    if (item) {
      return item;
    }
  }
  return null;
};

const storeItem = (key, item) => {
  let stringItem = JSON.stringify(item);
  localStorage.setItem(key, stringItem);
  return true;
};

const removeItem = (key) => {
  localStorage.removeItem(key);
  return true;
};

export { retrieveItem, storeItem, removeItem };
