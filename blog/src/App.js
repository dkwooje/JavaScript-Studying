

function App() {

  //배열 구조 분해 할당.
  const animals = ['강아지','고양이','오리','소'];

  
  //강아지와 고양이는 문자형, rest는 배열형으로 출력
  //...은 스프레드 연산자로 나머지 요소를 배열로 할당 한다.
  const [dog, cat, ...rest] =animals;
  console.log(dog, cat, rest);


}
export default App;
//구조 분해 할당: 배열이나 객체를 분해해서 각각의 값을 개별적인 변수에 담는 표현식.
