export default {
  getItem: function (key) {
    let value;
    try {
      value = localStorage.getItem(key);
      return value;
    } catch (err) {
      if (__DEV__) {
        console.error('localStorage.getItem报错, ', err.message);
      }
      return value;
    }
  },
  setItem: function (key, value) {
    try {
      // ios safari 无痕模式下，直接使用localstorage.setItem 会报错
      localStorage.setItem(key, value);
    } catch (err) {
      if (__DEV__) {
        console.error('localStorage.setItem报错, ', err.message);
      }
    }
  }
};
