

function App() {


const animals ={
  dog: '강아지',
  cat: '고양이',
  duck: '오리'
}

const dog1 = animals.dog;
const cat1 = animals.cat;
const duck1 = animals.duck;

console.log(dog1,cat1,duck1);


 //객체 구조 분해 할당.
 //기존 객체와 같은 이름을 가져야 한다.
 //위치를 바꿔도 생략도 수정도 가능하다
 const {dog,cat,duck} = animals
 console.log(dog,cat,duck);
 console.log(duck,dog);

}
export default App;
//구조 분해 할당: 배열이나 객체를 분해해서 각각의 값을 개별적인 변수에 담는 표현식.
