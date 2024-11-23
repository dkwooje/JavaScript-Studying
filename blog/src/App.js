

function App() {

 

  function networkRequest(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
      resolve();
      },2000);
    });
  }

  async function getUser(){
    await  networkRequest();
     return "움직였습니다.";
  }

  async function  getTodo() {
    await networkRequest();
    return ['청소하기', '밥먹기'];
  }

   async function getData() {
    const user = await getUser();
    console.log(user);
    const todo = await getTodo();
    console.log(todo);
    console.log(`${user} 그리고 나서 ${todo}를 합니다.`);
   } 
  

  getData(); 
  //getData함수를 호출하면 await된 getUer를 기다리고
  // getUser는 await된 networkRequest를 기다리고 
  //networkRequest는 2초를 딜레이 하게 된다. 그 후 console.log(user)를 출력한다.
  
}

export default App;
//Asynce 와 Await
