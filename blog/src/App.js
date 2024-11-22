

function App() {

  main() //호이스팅 가능

//함수 선언식 표현법 (일반함수) 
  function main(){
    console.log("hello")
  }
  
  main()   //함수 main를 호출
 
//함수 표현식 표현법(익명함수)

  //main2() //호이스팅 불가능

const main2 = function(){
  console.log("hi")
}

  main2() //함수를 가진 변수 main2를 호출

}
export default App;
//화살표 함수
//function : 함수 선언식 과 함수 표현식으로 나뉜다.