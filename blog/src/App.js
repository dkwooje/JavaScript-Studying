
function main(){
  console.log(this); //함수가 object 밖에서 정의 되어도 this는 object를 가르킨다.
}

const object = {
  name: '코딩',
  //main,
  smallObject:{
    name: '작은 코딩',
    main,
  }
  };

//object.main(); //메인함수를 호출한 객체가 object이기 때문이다.
object.smallObject.main();
//main값을 직접 호출한 객체는 smallObject이기 때문에 this는 smallObject가 된다.


function App() {

}
export default App;
//javascript의 this : 함수를 호출한 객체이다.
