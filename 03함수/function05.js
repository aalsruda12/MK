//변수에 함수를 담아보자
function some(){
    console.log("say hello!");
    
}
let x = some;
console.log(x);
x(); //x를 함수처럼 사용이 가능해짐

//익명함수문장
// say hello(); //익명함수는 당겨서 호출하기(호이스팅)불가능.

let sayhello = function(){
    console.log("say hello");
    
}
sayhello();

//두 수의 덧셈을 반환하는 익명함수
let add = function(a,b){
    return a+b;
}
console.log(add(1,2));