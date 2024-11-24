

function App() {


const animals ={
  dog: '강아지',
  cat: '고양이',
  duck: '오리'
}


 //객체 구조 분해 할당.
 //기존 객체와 같은 이름을 가져야 한다.
 //위치를 바꿔도 생략도 수정도 가능하다

 const dog = '멍멍';
 const cat = '야옹';
 const duck = '꽥꽥';
 const {dog: dogName, cat: catName, duck: duckName} = animals
 console.log(dog,cat,duck);
 console.log(dogName,catName,duckName);
 
 
}
export default App;
//구조 분해 할당: 배열이나 객체를 분해해서 각각의 값을 개별적인 변수에 담는 표현식.
