//자동형변환 - 연산시에 자동으로 타입이 변하게 됩니다.

let num = 10 + 3.14 ;
console.log(num);

let text = "10" + 3.14 + 5;
console.log(text); //문자열은 가장 강한 타입이라서 문자열 뒤에 붙는 숫자들은 모두 문자열이 된다고 생각하면 됨 !
console.log(typeof(num));

let text2 = 3.14 +5 + "10" + 10;
console.log(text2);

let num2 = "5" * 3 ; //빼기 곱하기 나누기 시에는 숫자로 변경됩니다. 더하기만 빼고 !!!!!! 
console.log(num2);

//명시적 형변환 -> 강제로 타입을 바꾸는 과정
//parseInt , parseFloat

let result = parseInt("5") + 1 ; //문자열 5가 숫자 5로 변하는거임
console.log(result); //6
console.log(parseInt("바꿀 수 없는 값이 들어가면?")); //6 (NaN-not a number 숫자가 아니라고 말해주는것임)

console.log(parseFloat("3.14")); //실수값으로 변환시에는 parseFloat 사용하면 됨 소수점 있는 실수에는 !!!!!!

console.log( 5 + " "); //숫자를 문자열로 바꿀때는 그냥 빈 문자열을 더하면 해결~! 이런 경우는 거의 없어서 알고만있자~









