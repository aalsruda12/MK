//return - 함수가 실행한 결과를 호출구문으로 돌려주는 값

function add (a,b){
    return a + b;
}
let result = add (3,5); //리턴을 받아서 저장하는 코드
console.log(`함수 실행결과: ${result}`);

//리턴이 있는 함수는 호출문이 실행결과를 돌려받기 때문에, 출력문에 한번에 쓸수있음.
console.log(`함수 실행결과: ${add(5,5)}`); // 변수 설정 없이 바로 사용해도됨. 리턴기능을 이미 앞에 사용했기 때문에.
//리턴이 있는 함수는 함수의 중첩도 가능합니다.
let result2 = add( add(1,2), add(3,5) );
console.log(`함수 실행결과: ${result2}`);

//return -> 돌려주다 + 힘수의 종료
//반드시 양의 정수값만 전달 되어야하는 함수
function some(num){

    if(num <=0){
        return false; //함수의 종료의 의미로 사용할 수 있기때문에 return뒤에는 무조건 값이 오지않아도 실행가능.
        //return만 사용하게되면 undefinded가 반환되기때문에 boolean값을 반환하도록 하는게 일반적.
    }

    return "전달받은 양의 정수는" + num + "입니다";
    console.log("이거 실행되나?"); //리턴코드 뒤에있는 다른 코드는 동작하지않음.
    
}
console.log(some(-10));
    
