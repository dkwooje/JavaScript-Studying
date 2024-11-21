
//const a = 'hi'; //const를 let으로 바꿔보자
//a= 'hello'; //const는 재할당이 불가능하다.


const b ={
  x: 1,
  y: 2,
}

//b={z:3} //객체에 추가하는것은 불가
b.x = 145;  //객체안의 속성을 변경은 가능하다.

console.log(b);

const c = Object.freeze({ //만약 객체안의 속성의 변경을 막고 싶다면  Object.freeze를 사용해 보자.
  x: 1,
  y: 2,
});

b.x = 145; 

console.log(c);

function App() {

}
export default App;
//const : block Scope, 중복 선언 불가, 선언문 이전 접근 불가 (let과 같다.)
//단 const는 let과 달리 상수를 선언한다.(한번 값을 할당하면 재할당 불가)