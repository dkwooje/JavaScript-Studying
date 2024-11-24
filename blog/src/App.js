

function App() {

  const fruits = [
    { name: '배', price: 500},
    { name: '사과', price: 700},
    { name: '귤', price: 400},
    { name: '포도', price: 1500},
  ]

  const Exist = fruits.some((fruit)=>{
    if(fruit.price > 600){
      return true
    }
    return false
  });

  console.log(Exist);

}
export default App;

//배열 함수들
//some(): 배열 안에서 조건이 하나라도 맞는 객체를 찾는다.