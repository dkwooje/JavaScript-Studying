

function App() {

  function login(username, callback){
    setTimeout(()=>{
      callback(username);
    }, 1000);
  }


  function addToCart(porduct, callback){
    setTimeout(()=>{
      callback(porduct);
    }, 1000);
  }

  function makePayment(cardNumber, porduct, callback){
    setTimeout(()=>{
      callback(cardNumber, porduct);
    }, 1000);
  }


  login('별코딩', (username) =>{
    console.log(`${username}님 안녕하세요`);
  addToCart("감자", (porduct) => {
    console.log(`${porduct}를 장바구니에 넣었습니다.`);
  makePayment("00000000000000","감자", (cardNumber,product) => {
    console.log(`${cardNumber.slice(0,6)}로 ${product}를 구매했습니다.`); //slice(첫 6자리만 출력)
      });
    });
  });
}


export default App;
//비동기 콜백
//비동기 방식의 함수처리후 진행해야하는 함수가 있을 때 사용한다. 비동기-> 비동기 콜백->비동기 후 진행 해야하는 함수