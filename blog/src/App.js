

function App() {

const numbers = [10,4,2,8];


const smallest = numbers.reduce((accumulator,currentValue)=>{
  if(accumulator > currentValue){
    return currentValue
  }
  return accumulator;
}) //초기값을 넣어주지 않으면 첫번쨰 요소는 스킵하고 두번째 요소부터 시작한다.
    //그리고 초기값으로 첫번째 요소가 된다.
// accumulator:  - currentValue: - return: -
// accumulator:  10 currentValue: 4 return: 4
// accumulator:  4 currentValue: 2 return: 2
// accumulator:  2 currentValue: 8 return: 2

console.log(smallest);

}
export default App;
//reduce : 배열 안의 모든 요소를 하나의 값으로 만들때 사용
//reduce함수는 배열의 각 요소가 한번씩 실행한다.