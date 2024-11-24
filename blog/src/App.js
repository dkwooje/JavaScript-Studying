

function App() {

  //배열 구조 분해 할당.
  const animals = ['강아지','고양이','오리'];

  const dog = animals[0];
  const cat = animals[1];
  console.log(dog);
  console.log(cat);

  const [dog1, cat1] = animals;
  console.log(dog1, cat1);

  const [dog2, ,duck2] = animals;
  console.log(dog2, duck2);

  const [dog3, cat3, duck3="꽥꽥", cow3="소"] =animals;
  console.log(duck3, cow3);

}
export default App;
//구조 분해 할당: 배열이나 객체를 분해해서 각각의 값을 개별적인 변수에 담는 표현식.
