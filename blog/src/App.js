

function App() {

const numbers = [1,2,3,4];

//forEach
let total1 = 0;

numbers.forEach(number =>{
  total1 = total1 + number;
})

console.log(total1);

//reduce
//accumulator: 현재까지 누적된 값을 의미
//currentValue: 각 배열의 요소를 의미
const total2 = numbers.reduce((accumulator,currentValue)=>{
   return accumulator + currentValue
}, 0) //accumulator의 초기값: 0
//accumulator: 0  currentValue: 1  return:  1
//accumulator: 1  currentValue: 2  return:  3
//accumulator: 3  currentValue: 3  return:  6
//accumulator: 6  currentValue: 4  return:  10

console.log(total2);


}
export default App;
//reduce : 배열 안의 모든 요소를 하나의 값으로 만들때 사용
//reduce함수는 배열의 각 요소가 한번씩 실행한다.