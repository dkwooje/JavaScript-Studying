

function App() {


const main = function(){ //익명함수
  console.log("hi")
}

  main() 

const main2 = () => { //화살표함수
    console.log("hi")
  }
  
    main2() 

const main3 = () => console.log("hi")  //코드가 간결하면 중괄호와 return 생략 가능
    
      main3() 

const main4 = () => ({saying: "hi"})      

      console.log(main4())
}
export default App;
//화살표 함수
//function : 함수 선언식 과 함수 표현식으로 나뉜다.
//화살표 함수는 함수 표현식(익명함수)를 기반으로 만든다.
