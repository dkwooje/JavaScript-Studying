

function App() {

  if(true){
    var x ='hi';
    //  let x ='hi';
  }
  console.log(x); //var의 변수 x는 if블록 밖에서도 x가 유효하다. java는 보통 에러가 난다.
                  //하지만 let의 변수는 java처럼 유효하지 않게 된다.
                  //let은 블록스코프이기 때문이다.
                  //블록스코프는 변수를 선언한 블록 내부에서만 유효하기 때문이다.
}
 
export default App;

//Var와 let의 비교 (1.스코프 2.중복 선언 3.호이스팅)
//1.스코프(범위): 변수가 접근할 수 있는 범위
//스코프의 종류: 1.함수범위(var) 2.블록범위(let) 3.전역범위