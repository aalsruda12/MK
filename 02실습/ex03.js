//1. 학생별 점수의 평균을 구해보세요.(중첩)

let student = [
    ["철수", 76,34,23],
    ["정재", 30,99,76],
    ["남규", 76,87,54],
    ["남수", 98,76,45]
];

for(let i = 0; i < student.length; i++) {

    let num1 = 0;
    for(let j = 1; j < student[i].length; j++){
        num1 += student[i][j];
                
    } 
    console.log();
    
}


