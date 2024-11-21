
const object = {
  name: '코딩',
  main: function(){
    console.log(this); //함수 안의 this는 함수를 호출하는 객체가 된다.
  }
}

object.main(); //main은 obtect를 호출한다. 그러므로 this는 object가 된다.





function App() {

}
export default App;
//javascript의 this : 함수를 호출한 객체이다.
