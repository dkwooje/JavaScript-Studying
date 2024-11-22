

function App() {

   function greetToUser(greet){
    const name = '네르';
    //... 데이터 로딩//콜백 함수는 비동기 함수에 유용하다.
    greet(name);
   }

   function greetInKorean(name){
    console.log(name + "님, 안녕하세요");
   }

   function greetInEnglish(name){
    console.log("HI, ms."+ name);
   }
             
   greetToUser(greetInKorean);
   greetToUser(greetInEnglish);
}
export default App;
