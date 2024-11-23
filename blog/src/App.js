

function App() {

  function login(username){
    return new Promise((resolve, reject) =>{
      setTimeout(()=>{
        if(username){
          resolve(username);
        }else{
          reject(new Error('아이디를 입력해주세요'));
        }
      }, 1000); 
    });
  }

  function addToCart(product){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(product){
          resolve(product);
        }else{
          reject(new Error('장바구니에 넣을 상품이 없습니다.'))
        }
      }, 1000);
    });
  }
  
  function makePayment(cardNumber, product){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if(cardNumber.length !== 16){
          reject(new Error('잘못된 카드 번호 입니다.'));
          return;
        }if(!product){
          reject(new Error('결제할 상품을 넣어주세요'));
          return;
        }
          resolve(product);
      }, 1000);
    });
  }

  login('피코라').then((username) =>{
    console.log(`${username}님 환영합니다.`);
    return addToCart('감자');
  })
  .then((product) =>{
    console.log(`${product}를 장바구니에 담았습니다.`);
    return makePayment('1234123412341234', product);
  })
  .then((product) =>{
    console.log(`${product} 결제를 완료했습니다.`);
  })
  .catch((error) =>{
    console.log(error.message);
  })
  .finally(()=>{
    console.log('마무리 작업');
  })

}

export default App;
//promise 응용
