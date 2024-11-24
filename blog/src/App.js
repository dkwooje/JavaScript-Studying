

function App() {

  const fruits = [
    { name: '배', price: 500},
    { name: '사과', price: 700},
    { name: '귤', price: 400},
    { name: '포도', price: 1500},
  ]

  const item = fruits.findIndex((fruit) => { 
      if(fruit.price === 400 ){
        return true
      }
      return false
  })

  console.log(item);
}
export default App;

//배열 함수들
//findIndex(): 배열에서 찾고싶은 객체를 요소가 아닌 인덱스값을 찾는 함수
//조건에 맞지 않는다면 -1값을 반환한다.