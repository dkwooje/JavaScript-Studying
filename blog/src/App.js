
function main(){
  console.log(this); 
}
const mainBind = main.bind({name: 'hi'}); //bind 새로운 함수를 반환해준다.
mainBind();                           


function App() {

}
export default App;
//javascript의 this : 함수를 호출한 객체이다.
