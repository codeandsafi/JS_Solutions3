// 1.

// const array1 = [1,2,3,4];

// let newArr = array1.map((curElm) => {
//     return curElm**3;
// })
// console.log(newArr);


// 2.

// let object1 = {
//     name: "Safiul",
//     stream: "ECE",
//     roll: 1002
// }

// let keys = Object.keys(object1);
// console.log(keys);


// 3.

// let object2 = {
//     name: "Safiul",
//     stream: "ECE",
//     roll: 1002
// }

// let keys2 = Object.values(object2);
// console.log(keys2);


// 4.

// var and let are both used for variable declaration in javascript. The difference between them is that var is function scoped and let is block scoped. Variable declared by let cannot be redeclared and must be declared before use whereas variables declared with var keyword are hoisted.


// 5.

// function multliply () {
//     var result = 1;
//     for(var i = 0 ; i < arguments.length; i++){
//         result *= arguments[i];
//     }
//     return result;
// }

// console.log(multliply(2, 2, 8));


// 6.

// const stack = [];
// let top = -1;

// push = (value) => {
//     top++;
//     stack.push(value);
// }

// pop = () => {
//     top--;
//     stack.pop();
// }

// push("apple");
// push("apple1");
// push("apple2");
// push("apple3");
// pop();
// console.log(stack);
// console.log(top);



// 7.

// let array = [
//     {
//         name: "Srijan",
//         roll: 34
//     },

//     {
//         name: "Sagnik",
//         roll: 33
//     },

//     {
//         name: "Subhradeep",
//         roll: 35
//     }
// ];


// array.sort((a, b) => {
//     return b.roll - a.roll;
// });

// console.log(array);