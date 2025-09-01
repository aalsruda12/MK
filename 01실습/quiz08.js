//1) 100까지의 수 중에서 3의 배수이면서 4의 배수인 수를 출력.
let i = 1;
while(i <= 100) {

    if(i % 3 ===0 && i % 4 === 0) {
        console.log(i);
    }
    i++;
}




//2) 524의 약수의 갯수를 구하세요.
    let num = 524;
    let x = 1;
    let cnt = 0; //개수를 누적할 변수
    while(x <= 524) {
    
        if(num % x === 0){
            cnt++; //개수
        }
        x++;
    }
console.log(`524의 약수의 갯수 ${cnt}`);

//3) 100까지의 수 중에서 9의 배수의 합계를 구하세요.

let a = 1;
let sum2 = 0;
while(a <= 100) {

    if(a % 9 ===0) { //a가 9의 배수
        sum2 += a;
    }
    a++;
}

console.log(`1~100까지 수 중의 9의 배수의 합: ${sum2}`);