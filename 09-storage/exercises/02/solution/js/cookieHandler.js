/*
Készíts egy cookieHandler nevű objectet, az alábbi három metódust megvalósítja:

getAll: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy objektumban, ahol a sütik neve a key és az értéke a value (pl. { viewed: 5 })
toSessionStorage: minden sütit egyenként elment a sessionStorage-ba az adott süti nevével és értékével
flush: törli az összes sütit
*/

const cookieHandler = {
  getAll() {
    const keys = [];
    const values = [];
    document.cookie.split('; ').map((item) => item.split('=')).forEach((item, index) => {
      keys.push(item[0]);
      values.push(item[1]);
    });

    const returnObj = {};

    for (let i = 0; i < keys.length; i++) {
      returnObj[keys[i]] = values[i];
    }

    return returnObj;
  },
  toSessionStorage() {
    const object = this.getAll();
    Object.entries(object).forEach(([key, value]) => sessionStorage.setItem(key, value));
  },
  flush() {
    const object = this.getAll();
    Object.keys(object).forEach((key) => {
      document.cookie = `${key}=; expires=${new Date(null).toUTCString()}; path=/`;
    });
  },
};

export default cookieHandler;
