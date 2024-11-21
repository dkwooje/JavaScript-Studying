

function App() {

  let x = "hello"; //두 변수 x를 var로 바꿔 비교해보자
  if(true){
    let x ='hi';  //var로 바꾸면 아래의 변수가 위의 변수를 덮어 씌운다.
    console.log(x); 
  }
  console.log(x);
}
 
export default App;

//Var와 let의 비교 (1.스코프 2.중복 선언 3.호이스팅)
//1.스코프(범위): 변수가 접근할 수 있는 범위
//스코프의 종류: 1.함수범위(var) 2.블록범위(let) 3.전역범위