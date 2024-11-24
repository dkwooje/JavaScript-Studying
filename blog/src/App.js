

function App() {

  const fruits = [
    { name: '배', price: 500},
    { name: '사과', price: 700},
    { name: '귤', price: 400},
    { name: '포도', price: 1500},
  ]

  const cheapFruits = fruits.filter((fruit)=>{
        if(fruit.price <= 600){
          return true
        }
        return false
  })

  console.log(cheapFruits);
  console.log(fruits);
}
export default App;

// filter(): 배열에서 조건에 맞는 특정 요소만 골라서 새 배열로 만들어 준다.
// 원본 배열은 변화가 없다.