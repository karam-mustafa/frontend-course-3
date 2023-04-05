// Hoisting
// function printHello() {
//   console.log("Hello Focal X");
// }

// function printHello2() {
//   printHello();
//   return 10000;
// }

// printHello2()


// Localstorage


localStorage.setItem('focalx', JSON.stringify([1,2,3]));
console.log('====================================');
console.log(JSON.parse(localStorage.getItem('focalx')));
console.log('====================================');
