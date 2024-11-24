

function App() {

  function getAnimals(){
    return ['강아지','고양이', '오리'];
  }

 //  const animals = getAnimals();

 // const dog = animals[0];
 // const cat = animals[1];

 // console.log(dog,cat);
//////////////////////////////////////////////////////////////////////////////

  
 // const dog = getAnimals()[0];
 // const cat = getAnimals()[1];

// console.log(dog,cat);

//////////////////////////////////////////////////////////////////////////////

 [dog, cat] = getAnimals();

console.log(dog,cat);




}
export default App;
//구조 분해 할당: 배열이나 객체를 분해해서 각각의 값을 개별적인 변수에 담는 표현식.
