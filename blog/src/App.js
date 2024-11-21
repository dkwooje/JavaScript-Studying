

function App() {

  for(let i = 0; i<2; i++){  //var i 와 구분해 보자
    console.log(i); 
  }
 // console.log(i); // var 변수에만 유효하다. 그리고 추가적으로 계산 된다. 즉 for문 이상 출력된다.
}
export default App;

//Var와 let의 비교 (1.스코프 2.중복 선언 3.호이스팅)
//1.스코프(범위): 변수가 접근할 수 있는 범위
//스코프의 종류: 1.함수범위(var) 2.블록범위(let) 3.전역범위