//데이터 타입 (각 변수들은 암묵적으로 데이터에 대한 종류를 가지고 있습니다.)
let name = "최민경";
let name2 = "홍길동";  // String

console.log(name2+ "아아아ㅏ아 이 부분은 꼭 돌려서 기억하자!!!!!!!!!");

let age = 27;       // number
let kg = 55.4;      // number - 정수, 실수 상관없음

console.log(name2 + "님의 나이는 " + age + "세 이고, 몸무게는 " + kg + "입니다.");
console.log(name + "난 바보멍청이지");

let bool = true;
console.log("거짓은 영어로:" + bool);

let bool2 = false; //boolean
bool = false;
console.log("거짓은 영어로:" + bool);


//null - 초기화는 했지만, 값이 없을 때 나타나는 것
//코드러너에서 document라는걸 사용할 수 없음.
// let x = document.getElementById("이런건 화면에 없어!");
// console.log(x);

//undefind - 초기화를 하지 않은경우에 나타남.
let y;
console.log(y);

let arr = []; //배열이라고 부름 (집합)
let obj = {}; //객체라고 부름 (집!)

//변수에 타입 확인이 필요한 경우에 typeof 키워드로 확인할 수 있습니다.

console.log(typeof name);
console.log(typeof age);
console.log(typeof kg);
console.log(typeof bool);
console.log(typeof y);
console.log(typeof arr);
console.log(typeof obj);