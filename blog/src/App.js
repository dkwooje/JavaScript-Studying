

function App() {

  const fruits = [
    { name: '배', price: 500},
    { name: '사과', price: 700},
    { name: '귤', price: 400},
    { name: '포도', price: 1500},
  ]
//키와값 형태의 객체 배열에서 단순 문자열 배열로 바꿈
  const priceTags = fruits.map((fruit)=>{   
    return `${fruit.name} : ${fruit.price}원`
  });

//키와 값 형태로 유지할 수 있다.
  const priceValue = fruits.map((fruit) => { 
    return { name: `맛있는 ${fruit.name}`, priceTag: `${fruit.price}원` };
  });

  console.log(priceTags);
  console.log(fruits);
  console.log(priceValue);
}
export default App;

// map(): 원본 배열의 요소를 다른 형태로 변환해에 담아서 새로운 배열로 만든다.
//원본배열은 바뀌지 않는다.