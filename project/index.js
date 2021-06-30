console.defaultError = console.error.bind(console);
console.errors = [];
window.onerror = function myErrorHandler(err, url, line) {  
    //Do some  stuff 
    console.log('err 1 ', err); // Uncaught SyntaxError: Invalid or unexpected token at Line no:- 1
    return false;   // so you still log errors into console 
}
console.error = function(){
    // default &  console.error()
    console.defaultError.apply(console, arguments);
    // new & array data
    console.errors.push(Array.from(arguments));
    console.log(Array.from(arguments));
}
// 1
const arr = [90,88]
// arr.length=90**99;
// console.log('console.error ', console.error);

// 2
const cat = "cat"
cat
dog

// 3
// let cat h = "cat";

// 4
// const num = 123;
// num.toUpperCase();

// 5
// decodeURI("%");

// 6
// function foo() {
//     foo()
// }
// foo();