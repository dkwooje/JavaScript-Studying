

function App() {

//fetch().then().catch().finally()  //fetch는 promise의 메서드를 사용할 수 있다.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response)=>{
    console.log(response); //HTTP 정보 출력
    return response.json(); //json 역시 promise를 반환해준다.
  })
  .then((data)=>{
    console.log(data); //fetch안의 정보를 json 형식으로 출력
  })
  .catch(error =>{
    console.log("에러가 발생했습니다.");
  })
  .finally(()=>{
    console.log('마무리 작업');
  })


}

export default App;
//promise의 fetchAPI