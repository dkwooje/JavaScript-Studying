

function App() {


  function getData(){
    const promise = new Promise((resolve,reject)=>{ 
      setTimeout(()=>{  
        const data = {name: '철수'};
        if (data){
          console.log('네트워크 요청 성공');
          resolve(data)
        } else{
          reject(new Error('네트워크 문제!!!'));
        }
    }, 1000);                   
  });

  return promise;
}
/*      
const promise = getData();

promise.then((data)=>{
  console.log(data);
  return getData();   //promise chaining을 하기 위해서는 함수를 return 해줘야 한다.
}).then((data)=>{
  console.log(data);
  return getData();
}).then((data)=>{
  console.log(data);
});
*/

//간단히 표현할 수 있다.
const promise = getData();
promise
  .then((data)=>getData(console.log(data)))
  .then((data)=>getData(console.log(data)))
  .then((data)=>getData(console.log(data)))
  .then(console.log)
}
export default App;
//promise chaining.