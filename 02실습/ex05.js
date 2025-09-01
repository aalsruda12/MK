let arr = [1,2,3,4,5];
let sum = 0;


for(let i = 0; i < arr.length; i++){

    sum += 0;
    if(arr[i] % 2 === 0){
        sum += arr[i];
    }
}
console.log(`짝수의 합계: ${sum}`);



