

function App() {

  function login(username, callback){
    setTimeout(()=>{
      callback(username);
    }, 1000);
  }

  function addToCart(product,callback){
    setTimeout(()=>{
      callback(product);
    }, 1000);
  }
  
  function makePayment(cardNumber, product, callback){
    setTimeout(()=>{
      callback(cardNumber, product);
    }, 1000);
  }

  login('피코라',(username) =>{
    console.log(`${username}님 안녕하세요.`);
    addToCart('감자', (product) =>{
      console.log(`${product}를 장바구니에 넣었습니다`);
       makePayment('0000000000000000', product, (item) =>{
        console.log(`${product}의 결제가 완료되었습니다`);
       });
    });
  });

}

export default App;
//promise 응용
