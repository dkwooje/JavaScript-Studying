

function App() {

  function getName(){
    return new Promise((resolve,reject) =>{
      setTimeout(()=>{
     //   resolve('에슈르');
        reject(new Error('에러: 여기에 없어요'));
      },1000);
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

//getName과 getTodo를 순차적으로 실행하여 총 3초(1초+2초)의 시간이 걸렸다.
//두 비동기 함수를 동시에(병렬) 처리하기 위해서는 Promise.all을 사용해야 한

const promise = Promise.all([getName(), getTodo()])
promise.then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log(error);
})
// Promise.all안의 배열에서 하나라도 실패하면 reject를 반환시키고 catch블록이 실행된다.
// catch는 가장 먼저 실패한 promise가 실행된다.

}

export default App;
//promise Static 함수

//1.Promise.all
//2.Promise.allSettled
//3.Promise.any
//4.Promise.race