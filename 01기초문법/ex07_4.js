//&& - 양쪽 항이 모두 true여야 true
//|| - 양쪽 항중 한쪽만 true여도 true
let a = true;
let b = false;

console.log("&&의 결과:" + (a && b)); //한쪽이 false기 때문에 결과는 f ()소괄호를 사용해서 먼저 계산시켜주기 !!!!
console.log("||의 결과:" + (a || b)); //한쪽만 true여도 t 
console.log("!:" + !a); //!느낌표는 부정의 의미이므로 반대의 의미로 바꿔줌. 그러므로 false.

//어떤수가 3의 배수이면서, 4의 배수인 경우를 조건식으로 세워보면,(두 조건 다 만족하려면 &&(and)같은걸로 나눠볼 수 있음.)
let x = 12;
console.log(x % 3 === 0 );
console.log(x % 4 === 0 );
console.log(x % 3 === 0 && x % 4 === 0); //&& <-사용해서 여러 조건을 동시에 검사할 수 있음!





