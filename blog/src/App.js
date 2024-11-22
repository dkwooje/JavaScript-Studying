

function App() {
/*
function getData(){
  setTimeout(()=>{
    console.log('서버에서 데이터를 받았습니다.');
  }, 2000);
}

getData();
console.log('후처리 진행 합니다.');  //getData보다 먼저 진행된다.
*/

function getData(callBack){
  setTimeout(()=>{
    console.log('서버에서 데이터를 받았습니다.');
    callBack();
  }, 2000);
}

getData(()=>{
  console.log('후처리 진행 합니다.');  
});



}
export default App;
//비동기 콜백
//비동기 방식의 함수처리후 진행해야하는 함수가 있을 때 사용한다. 비동기-> 비동기 콜백->비동기 후 진행 해야하는 함수