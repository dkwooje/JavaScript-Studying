

function App() {

 

  function networkRequest(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
      resolve();
      },2000);
    });
  }

  async function getUser(){
    throw new Error('에러가 발생했어요!');
    await  networkRequest();
     return "움직였습니다.";
  }

  async function  getTodo() {
    await networkRequest();
    return ['청소하기', '밥먹기'];
  }

   async function getData() {
    let user;
    try{
      user = await getUser();
    } catch(error){
       console.log(error.message);
       user = '하지만 움직였습니다.';
    }
    const todo = await getTodo();
    console.log(`${user} 그리고 나서 ${todo}를 합니다.`);
   } 
  

  getData(); 
}

export default App;
//Asynce 와 Await
