

function App() {

  function main(){
    console.log(arguments)
  }

  main(1,2,3,4,5,6,7)

  const main2 =(...aaa) =>{
    console.log(...aaa)
  }

  main2(1,2,3,4,5,6,7)


}
export default App;
//arguments는 함수에 전달받은 인자를 배열형태의 객체로 만드는 특수 변수이다.
//하지만 arguments는 익명함수 쓰면 오류가 생긴다.
//하지만 ...(나머지 매게변수)를 사용하면 표현할 수 있다.