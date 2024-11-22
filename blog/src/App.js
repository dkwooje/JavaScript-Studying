

function App() {

const promise = new Promise((resolve,reject)=>{ //Promise라는 상자 안에 excicutor라는 함수를 전달 받는다. 
                                                    
setTimeout(()=>{                              
      const data = {name: '철수'};
      console.log('네트워크 요청 성공');
  }, 1000);                   
});
          
  console.log(promise);



}
export default App;
//pormise : 비동기 처리에 사용되는 자바스크립트 객체 
//비동기 작업이 맞이할 성공 혹은 실패를 나타냄
//promise 3가지 상태 : 대기(pending), 성공(fulfilled), 실패(rejected))
//대기 :undefined , 성공 :result , 실패:error 를 구현
