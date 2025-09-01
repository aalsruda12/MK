//함수의 선언

sayhello(); //선언적 함수는 호이스팅(당겨쓰기(호출)이 가능함)

function sayhello(){
    console.log("안녕하세요!");
    
}

//함수를 부르는 과정 - 호출
sayhello();
sayhello();

console.log("================");


//구구단을 출력하는 함수
function dan(){
    console.log("====2단====");
    for(let i = 1; i <=9; i++){
        console.log(`2 x ${i} = ${2*i}`);
        
    }
}
dan();