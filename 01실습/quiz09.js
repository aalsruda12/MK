//1. 구구단 5단을 for문으로 출력

console.log()

//2. 7~100까지 정수 중에서 7의 배수를 출력

//문자열의 합 -> 가로로 출력
let str = ""
for(let i =7; i <=100; i+=7) {
    str += i + "" ;
}
console.log(str);



//3. 1~50까지 홀수의 합
let sum = 0;
for(let i = 1; i <=50; i++) {
    if(i % 2 === 1) {
        sum +=1;
    }
}
console.log(`1~50까지의 합: ${sum}`);
console.log(`---------------------------`);

//4.100의 약수의 합
let x = 100;
let sum2 = 0;
for(let i =1; i <=x; i++) {
    if(100 % i === 0) {
        sum2 += i;
    }
}