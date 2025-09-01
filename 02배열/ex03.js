/* 
배열의 반복 for문

*/
let sum = 0;
let arr = [1,2,3,4,5,6,7];

for(let i = 0; i < arr.length; i++ ){
    console.log(arr[i]);
    sum += arr[i]
}
console.log(sum);



























//합계
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log("----------------------------");
// //for ~ in구문
// for(let i in arr ) {
//     console.log(`인덱스 ${i}, 값 ${arr[i]}`);
// }
// console.log("----------------------------");
// //for ~ of구문 ES06
// for(let value of arr) {
//     console.log(`값 ${value}`);
// }
