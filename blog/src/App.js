

function App() {


  function getData(){
    const promise = new Promise((resolve,reject)=>{ 
      setTimeout(()=>{  
        const data = null;
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
      
 getData().then((data)=>{
  console.log(`${data.name}님 안녕하세요`);
}).catch((error)=>{
    console.log(error)
})


}
export default App;
//promise를 사용하는 비동기 함수 만들기
// then(), catch(), finally() Promise가 제공하는 메서드
//then: 성공, chatch: 실패