

function App() {
//변수 값 교환하기
  let a = 1;
  let b = 2;

  let temp = a
  a = b
  b = temp

  console.log(a, b);

//배열로 변수 값 교환.
let c = 3;
let d = 4;

[c,d] = [d,c];
console.log(c,d);


}
export default App;
//구조 분해 할당: 배열이나 객체를 분해해서 각각의 값을 개별적인 변수에 담는 표현식.
