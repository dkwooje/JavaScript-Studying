

function App() {


  function main(x){
    console.log('준비작업...');
    x(); //매게변수 x에 들어있는 콜백함수를 호출
    console.log('정리작업...');
  }

  function sayHi(){
    console.log("콜백함수");
  }

  main(sayHi); //어떤 함수에 인자로 전달되는 함수를 콜백 함수라고 한다.

///////////////////////////////////////////////////////////////////////////////////

function main2(x){
  x(); 
}

main2(function sayHi(){  //호출값에 바로 넣어 줄 수 있고
  console.log("일반콜백함수");
});

main2(function (){  //익명함수로 넣어줄 수 있다.
  console.log("익명콜백함수");
});

main2( () => {  //화살표 함수도 가능하다. 
  console.log("화살표 콜백함수");
});
             
}
export default App;
