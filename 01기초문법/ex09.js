/*if(조건식){

}*/
//랜덤한 점수를 하나 생성1~100
let point = parseInt( Math.random() *100 +1);
if(point >= 60) {
    console.log("점수는" , point);
    console.log("합격입니다.");
} else {
    console.log("점수는" , point);
    console.log("불합격입니다!");
    
}
