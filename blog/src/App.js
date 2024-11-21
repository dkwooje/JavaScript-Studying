
console.log(num); //undefined이 선언된다.(호이스팅(선언문 이전에 접근))

var num = 10;
//let num = 10; //let은 호이스팅 하지만 var와 같이 초기화 하지 않는다.(일시적 사각지대 TDZ)
 
console.log(num); //10이 선언된다.


function App() {

}
export default App;
