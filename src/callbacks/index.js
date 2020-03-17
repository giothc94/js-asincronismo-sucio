function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, cb) {
  return cb(num1, num2);
}

console.log(calc(2, 2, sum));

function date(cb) {
  // console.log("1",new Date());
  setTimeout(() => {
    let date = new Date();
    cb(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log("2",dateNow);
}

date(printDate);
console.log("Sigo");
