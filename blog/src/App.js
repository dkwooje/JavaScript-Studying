

function App() {

const users = 
  {name: '피라', age: 540}


  function printUser1(user){
    console.log(`${user.name}님은 ${user.age}살 입니다.`)
  }
  
//혹은

  function printUser2({name,age}){
    console.log(`${name}님은 ${age}살 입니다.`)
  }

  printUser1(users);
  printUser2(users);

}
export default App;
//구조 분해 할당: 배열이나 객체를 분해해서 각각의 값을 개별적인 변수에 담는 표현식.

