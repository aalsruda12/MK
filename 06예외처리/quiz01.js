/*
1. registUser(유저객체) 함수를 하나 생성합니다.
2. 매개변수로 전달된 유저객체의 name값이 2글자 이하이거나, 비어있으면 예외처리를 진행합니다.
3. 유저객체 안에 name값이 정상값이라면, 유저의 이름을 반환하면 됩니다.
*/

function registUser(obj) {
    try {
        if(typeof obj !== "object") {
            throw new Error("객체를 전달하세요");
        }
        if(obj.name.length <= 2 || obj.name == null ) {
            //예외생성
            throw new Error("이름은 3글자 이상입니다");
        }
        return obj.name; 
    } catch(e) {
        console.log(e.message);
        return null;
    }
}

let user = {name: "홍길동", addr: "서울시"};
registUser(user); //함수호출
