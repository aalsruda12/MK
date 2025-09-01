//배열에서 사용하는 다양한 함수


//배열의 선언을 new Array() - 추천방식은 아님

// let arr = new Array(3); //크기가 3이면서 비어있는 배열을 생성해줌
// console.log(arr);
// let arr2 = new Array(1,2,3); // = [1,2,3,]
// console.log(arr2);

let arr = [1,2,3,4,5];

arr.push(6); //맨 마지막에 6이라는 요소 하나를 더 추가한 것.
console.log(arr);
let item = arr.pop(); // 크기가 하나 줄고 맨 마지막에 있는 요소를 빼서 다시 돌려놓는 것.
console.log("pop으로 나온 값:" + item);
console.log(arr);

arr.unshift(100); //배열의 맨 앞에 추가해주는 것.
console.log(arr);
let item2 = arr.shift();
console.log("배열의 앞에서 제거된 값", item2);
console.log(arr);

// arr.splice(1,2); //첫번째 인덱스에서 두개를 제거한다는 뜻. 12345 여기서 23을 제거한거임.
// arr.splice(1,1); //첫번째 인덱스에서 1개를 제거
arr.splice(1,0,'a','b'); //값을 3개 이상 주게되면 추가를 해줌.
console.log(arr);

//탐색관련 함수 (배열에서 값을 찾을 때 사용)
let item3 = arr.indexOf(4); //4가 있는 위치를 나한테 반환
console.log("4가있는 위치:" , item3); //만약 찾는값이 없다면 -1을 나한테 반환해줌.
console.log(arr);

if( arr.indexOf('a') != -1 ) {
    console.log("a는 존재한다.");
    
}

if( arr.includes('a')) { //a가있다면 true,  없다면 false.
    console.log("a는 존재한다.");
    
}



