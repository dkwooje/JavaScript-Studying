

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
        resolve('빵만들기');
      // reject(new Error('에러: 학교 운영하기.'));
      },2000);
    });
  }

  getName().then((name) =>{
    console.log(name);
    return getTodo()
  }).then((todo) =>{
    console.log(todo);
  })

//Promise.any() : 전달하는 Promise 중에 가장 먼저 오는 Promise의 값을 가진다.
//const promise는 모든 Promise가 실패해야지만 실패를 반환한다. AggregateError: All promises were rejected
const promise = Promise.any([getName(),getTodo()]);
promise.then((data)=>{
  console.log(data +"any");
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