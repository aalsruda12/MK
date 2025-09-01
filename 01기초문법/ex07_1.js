//산술연산자 
let a = 5 * 3;
let b = 5 / 3; //몫 - 소수점까지 구해줌
let c = 5 % 3; //나머지 - 얘는 진짜 나머지

console.log(a, b, c);
console.log(parseInt(b)); //소수점 뒷자리 빼고 정수만 얻고 싶을 때는 요러케! 

//전위연산 - 먼저 증가하고 이후에 대입하는 것...진자 뭐라는거야 ㅠ
let x = 5;
let pre = ++x; // x+1 
console.log("x는:" + x);
console.log("pre는:" + pre);

//후위연산 - 먼저 대입하고 이후에 증가하는 것 
let y = 5;
let post = y++;
console.log("y값:"+y);
console.log("post값:"+post);

//일반적인 ++ , --의 표현은
let num = 1;
num++;
num++;
++num;
--num;
num--;
console.log(num); 

