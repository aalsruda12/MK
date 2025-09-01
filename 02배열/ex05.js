

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(matrix[0]);//[1,2,3]
console.log(matrix[0][0]);//1
console.log(matrix[1][0]);//4
console.log(matrix[2][2]);//9

console.log("====================");


//2차 배열의 순회
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]); //여기서 i=행 j=열로 보면됨.
        
    }
    
}

console.log("====================");

let student = [
    ["철수", 76,34,23],
    ["정재", 30,99,76],
    ["남규", 76,87,54],
    ["남수", 98,76,45]
];
let kor = 0;
let eng= 0;
let math = 0;

for(let i =0; i < student.length; i++){
    kor += student[i][1];
    eng += student[i][2];
    math += student[i][3];
    
}
console.log(`kor의 합계 ${kor}, 평균 ${kor / student.length }`);
console.log(`eng의 합계 ${eng}, 평균 ${eng / student.length }`);
console.log(`math의 합계 ${math}, 평균 ${math / student.length }`);


