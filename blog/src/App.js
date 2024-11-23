

function App() {

 

  //async를 Promise로 감싸도 그저 Promise로 반환 될 뿐이다.
  //async : Promise 반환하는 비동기 함수
 
  function networkRequest(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
      console.log('다야가');
      resolve("보석광산으로");
      },2000);
    });
  }


  //await  networkRequest();  //await는 오직 async 함수 내부에서만 사용 가능하다.
  async function getUser(){
    await  networkRequest();
    await  networkRequest();
     return "움직였습니다.";
  }

  const user = getUser();
  user.then((name)=>console.log(name))
  

}

export default App;
//Asynce 와 Await
