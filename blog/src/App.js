

function App() {

  //async는 항상 Promise를 return하는 비동기 함수이다. getUser함수는 Promise로 감싸진 상태이다.
 async function getUser(){
    return '다야';
  }

  const user = getUser();
  console.log(user);

  //Promise를 반환하는 것과 같이 반환시켜주면 정상 출력이 가능하다.
  user.then((name)=>console.log(name))

  

}

export default App;
//Asynce 와 Await
