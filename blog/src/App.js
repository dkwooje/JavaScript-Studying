

function App() {

  const fruits = [
    { name: '배', price: 500},
    { name: '사과', price: 700},
    { name: '귤', price: 400},
    { name: '포도', price: 1500},
  ]

  const isOver = fruits.every((fruit)=>{
    if(fruit.price > 100){
      return true
    }
    return false
  })
  
  console.log(isOver)


}
export default App;

// every(): 배열 안의 모든 요소가 특정 조건에 맞는다면 true를 반환한다.