

function App() {

  const fruits = [
    { name: '배', price: 500},
    { name: '사과', price: 700},
    { name: '귤', price: 400},
    { name: '포도', price: 1500},
  ]

  const item = fruits.find((fruit, index) => { 
      if(fruit.price === 500 && index === 0){
        return true
      }
      return false
  })

  console.log(item);
}
export default App;

//배열 함수들
//인덱스 값이 필요하다면 콜백함수 두번째 인자에 index를 추가한다.
//find 함수: 배열 안에서 특정 조건이 맞는 객체를 찾을 때 사용 한다.