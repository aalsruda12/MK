# 📌 JavaScript 변수 정리

JavaScript에서 변수는 데이터를 저장하는 이름이 붙은 공간입니다.

---

## ✅ 1. 변수 선언 방법

### `var` (ES5 이전부터 사용)
```js
var x = 10;
함수 스코프 (function scope)

중복 선언 가능

재할당 가능

호이스팅 O (선언만 끌어올려짐)

let (ES6)
js
코드 복사
let y = 20;
블록 스코프 (block scope)

중복 선언 ❌

재할당 가능

호이스팅 O (초기화 전 접근 시 에러)

const (ES6)
js
코드 복사
const z = 30;
블록 스코프

중복 선언 ❌

재할당 불가 (단, 객체 내부 값은 변경 가능)

선언과 동시에 초기화 필수

✅ 2. 스코프 (Scope)
종류	설명
Global Scope	코드 어디서나 접근 가능
Function Scope	함수 내부에서만 접근 가능 (var)
Block Scope	블록 내부에서만 접근 가능 (let, const)

js
코드 복사
function example() {
  if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
  }

  console.log(a); // ✅
  console.log(b); // ❌ ReferenceError
}
✅ 3. 호이스팅 (Hoisting)
변수 선언이 코드 상단으로 끌어올려지는 현상

js
코드 복사
console.log(a); // undefined
var a = 5;

console.log(b); // ❌ ReferenceError
let b = 10;
let과 const는 호이스팅은 되지만 "TDZ(Temporal Dead Zone)" 때문에 선언 전 접근 시 에러

✅ 4. 변수 재선언 & 재할당
선언 키워드	재선언	재할당
var	가능	가능
let	불가능	가능
const	불가능	불가능

js
코드 복사
const obj = { name: "Kim" };
obj.name = "Lee"; // ✅ 객체 내부 변경은 가능
✅ 5. 변수 이름 규칙
문자, 숫자, _, $ 사용 가능

숫자로 시작 ❌ (1name ❌)

예약어 사용 ❌ (let, if, class 등)

대소문자 구분 (name ≠ Name)

✅ 6. 선언 없이 변수 사용
js
코드 복사
x = 10; // 암묵적으로 글로벌 변수 (비추천)
"use strict" 모드에서는 에러 발생

js
코드 복사
"use strict";
x = 10; // ❌ ReferenceError
✅ 요약표
선언 키워드	스코프	호이스팅	재선언	재할당	특징
var	함수 스코프	O	O	O	구식, 비추천
let	블록 스코프	O*	X	O	일반 변수 선언
const	블록 스코프	O*	X	X	상수 선언 (값 고정)

※ let과 const는 호이스팅되지만 TDZ 때문에 초기화 전 접근 불가

