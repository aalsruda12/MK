//반복문 중첩 활용
/*
반복의 회전은 바깥회전에 따라서 안쪽 회전이 바뀔 수 있음.
바깥 반복문은 - 행
안쪽 반복문은 - 별 출력
*
**
***
****
*****
*/
let star = 5;

let result1 = "";
for(let i = 1; i <=star; i++) {
    
    for(let j = 1; j <= i; j++) {

    result1 += "*";    
    }
    //여기서 줄바꿈
    result1 += "\n";
}
console.log(result1);
console.log(`------------------`);
/*
*****
****
***
**
*
*/

let d = 5;

let result = ""; //출력의 합
for(let y = 1; y <= d; y++) { //행을 출력하기 위함.
    for(let g = 1; g <= d+1-y; g++) { //출력!!!!!!!!!
        result += "*";
    }
        result += "\n"; //줄바꿈을 합친다.
}
console.log(result);




