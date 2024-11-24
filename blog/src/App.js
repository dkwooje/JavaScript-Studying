

function App() {

const users = [
  {name: '피라', age: 540},
  {name: '키디언', age: 485}
]

  for(const user of users){
    console.log(user.name);
  }

}
export default App;
//구조 분해 할당: 배열이나 객체를 분해해서 각각의 값을 개별적인 변수에 담는 표현식.
