
const addEventing = (obj) => {
  const eventings = [];
  let objReturn = {
    on: (event, callBack) => {
      if (!eventings[event]) {
        eventings[event] = [];
      }
      eventings[event].push(callBack);
    },

    trigger: (event, ...args) => {
      if (eventings[event]) {
        eventings[event].map((callback) => callback(...args));
      }
    },
  };
  return objReturn;
};

module.exports = addEventing
