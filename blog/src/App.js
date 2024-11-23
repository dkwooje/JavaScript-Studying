

function App() {

 

  //async를 Promise로 감싸도 그저 Promise로 반환 될 뿐이다.
  //async : Promise 반환하는 비동기 함수
 
  function networkRequest(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
      console.log('다야가');
      resolve();
      },2000);
    });
  }

  //getUser가 비동기이기 때문에 networkRequest()를 기다리지 않고 바로 return을 실행한다. 
  //하지만 await를 붙이면 await가 붙여진 함수호출을 기다리고 다음을 진행할 수 있다.
  async function getUser(){
    await  networkRequest();
     return "움직였습니다.";
  }

  const user = getUser();
  user.then((name)=>console.log(name))

}

export default App;
//Asynce 와 Await
