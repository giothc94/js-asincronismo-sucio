const doSomethingAsync = option => {
  return new Promise((resolve, reject) => {
    option
      ? setTimeout(() => resolve("Do something async"), 2000)
      : reject(new Error("Error async"));
  });
};

const doSomething = async (option) => {
  const something = await doSomethingAsync(option);
  console.log(something);
};
console.log("Before");
doSomething(true);
console.log("After");

const anotherFunction = async (option) => {
  try {
    const something = await doSomethingAsync(option)
    console.log(something)
  } catch (error) {
    console.log(error)
  }
}

console.log("Before 1");
anotherFunction(true);
console.log("After 1");