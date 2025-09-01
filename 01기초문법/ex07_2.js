var a = 5;
var b = 3;

console.log(a == b); //a,b가 같은 값인지
console.log(a != b); //a,b가 같은 값이 아닌지
console.log(a >= 5); //a가 5보다 이상인지
console.log(a < 10); //a가 10보다 작은지
console.log(a <= 3); //a가 3보다 작은지
console.log(a > 5); // a가 5보다 큰지

console.log("=====================");

//js에만 있는 연산자 ===, !==
let x = "5";
let y = 5;

console.log("==:" , x == y);//두개짜리는 값만 비교해서 같은 값인지를 비교하는 것.
console.log("===:" , x === y);
console.log("!=:" , x != y);
console.log("!==:" , x !== y);

console.log("=====================");

let c;
let d = null;
console.log(c == d);//
console.log(c === d);//하나는 undefiend, 하나는 null이기 때문에 f가 나오는 것.

//세개짜리는 값과 타입을 비교해서 둘다 같은 값이여야지 트루를 뱉어줌. 
// 값은 맞는데 타입이 다르기때문에 faulse가 나오는것.
// 보통 세개짜리 연산자를 쓰는게 좋다.




