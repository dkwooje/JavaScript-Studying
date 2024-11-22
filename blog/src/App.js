

function App() {

  const object1 ={
    name: '객체1',
    main: function () {
      console.log(this.name + '입니다.');
    }
  };

  object1.main(); //객체 1의 main을 호출한다. console의 this는 main을 호출한 객체 1를 가르킨다.

  const object2 ={
    name: '객체2',
    main: object1.main 
  };

  object2.main(); //객체 2의 main을 호출하고, 객체2의 main은 객체 1의 메인을 가리키지만 console의 this는 객체 2를 가르킨다.

}
export default App;
