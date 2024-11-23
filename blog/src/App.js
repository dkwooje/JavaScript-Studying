

function App() {

 

  function networkRequest(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
      resolve();
      },2000);
    });
  }

  async function getUser(){
<<<<<<< HEAD
    throw new Error('에러가 발생했어요!');
=======
>>>>>>> 7cb90228f620509d28e6dcf78330dbfba83e695b
    await  networkRequest();
     return "움직였습니다.";
  }

  async function  getTodo() {
    await networkRequest();
    return ['청소하기', '밥먹기'];
  }

   async function getData() {
<<<<<<< HEAD
    let user;
    try{
      user = await getUser();
    } catch(error){
       console.log(error.message);
       user = '하지만 움직였습니다.';
    }
    const todo = await getTodo();
=======
    const user = await getUser();
    console.log(user);
    const todo = await getTodo();
    console.log(todo);
>>>>>>> 7cb90228f620509d28e6dcf78330dbfba83e695b
    console.log(`${user} 그리고 나서 ${todo}를 합니다.`);
   } 
  

  getData(); 
<<<<<<< HEAD
=======
  //getData함수를 호출하면 await된 getUer를 기다리고
  // getUser는 await된 networkRequest를 기다리고 
  //networkRequest는 2초를 딜레이 하게 된다. 그 후 console.log(user)를 출력한다.
  
>>>>>>> 7cb90228f620509d28e6dcf78330dbfba83e695b
}

export default App;
//Asynce 와 Await
