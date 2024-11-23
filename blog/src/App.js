

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
        resolve('빵만들기');
      //  reject(new Error('에러: 학교 운영하기.'));
      },2000);
    });
  }

  getName().then((name) =>{
    console.log(name);
    return getTodo()
  }).then((todo) =>{
    console.log(todo);
  })

//Promise.allSettled는 인자로 전달된 모든 Promise를 기다린다.
//각각의 Promise가 성공했는지 실패했는지 알고 싶을 때 사용한다.
const promise = Promise.allSettled([getName(), getTodo()])
promise.then((data)=>{
  console.log(data)
})
}

export default App;
//promise Static 함수

//1.Promise.all
//2.Promise.allSettled
//3.Promise.any
//4.Promise.race