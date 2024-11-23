

function App() {

  function getName(){
    return new Promise((resolve,reject) =>{
      setTimeout(()=>{
        resolve('에슈르');
      //  reject(new Error('에러: 여기에 없어요'));
      },3000);
    });
  }

  function getTodo(){
    return new Promise((resolve,reject) =>{
      setTimeout(()=>{
      //  resolve('빵만들기');
       reject(new Error('에러: 학교 운영하기.'));
      },2000);
    });
  }

  getName().then((name) =>{
    console.log(name);
    return getTodo()
  }).then((todo) =>{
    console.log(todo);
  })

//Promise.race: 전달하는 Promise 중 제일 빠른 Promise가 반환된다. any와 다르게 실패값도 마찬가지이다.

const promise = Promise.race([getName(), getTodo()]);
 promise.then((data)=>{
  console.log(data+"race")
 }).catch((error)=>{
  console.log(error);
 })

}

export default App;
//promise Static 함수

//1.Promise.all
//2.Promise.allSettled
//3.Promise.any
//4.Promise.race