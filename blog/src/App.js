

function App() {
/*
  const object1 = {
    name: '객체1',
    mainArrow: () => {
      console.log(this.name + '입니다.');
    }
  };
  
  object1.mainArrow();   //화살표 함수는 자신만의 this를 가지지 않는다.
*/
const object1 = {
  name: '객체1',
  mainArrow: function () {         // 일반 함수로 변경
    console.log(this.name + '입니다.');
  }
};

object1.mainArrow();

const object2 = {
  name: '객체2',
  mainArrow: () => {
    console.log(object2.name + '입니다.'); // object1을 직접 참조
  }
};

object2.mainArrow();


}
export default App;
