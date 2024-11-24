

function App() {

  const cart = [
    {
     name: '사과',
     price: 500
    },
    {
     name: '바나나',
     price: 700
    },
    {
     name: '레몬',
     price: 300
    },
  ]
  
 const allPrice = cart.reduce((acc,cur)=>{
  return acc + cur.price
 },0)

 console.log(allPrice);

}
export default App;
//reduce : 배열 안의 모든 요소를 하나의 값으로 만들때 사용
//reduce함수는 배열의 각 요소가 한번씩 실행한다.