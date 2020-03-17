const somethingWillHappen = option => {
  return new Promise((resolve, reject) => {
    if (option) {
      resolve("Hey!");
    } else {
      reject("Whooops!");
    }
  });
};

somethingWillHappen(true)
  .then(response => console.log(response))
  .catch(error => console.log(error));

const somethingWillHappen2 = option => {
  return new Promise((resolve, reject) => {
    if (option) {
      setTimeout(() => {
        resolve(option);
      }, 2000);
    } else {
      const error = new Error("Whoooops!");
      reject(error);
    }
  });
};

somethingWillHappen2(true)
  .then(response => console.log(response))
  .catch(error => console.error(error));

Promise.all([somethingWillHappen(true), somethingWillHappen2(true)])
  .then(response => {
    console.log("Array of results", response);
  })
  .catch(error => console.error(error));
