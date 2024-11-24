

function App() {

console.group("루프 1");
for (let i = 0; i<3; i++){
  console.log(i);
}
console.groupEnd();
console.group("루프 2");
for (let i = 0; i<3; i++){
  console.log(i);
}
console.groupEnd();
console.group("루프 3");
for (let i = 0; i<3; i++){
  console.log(i);
}
console.groupEnd();
console.group("루프 4");
for (let i = 0; i<3; i++){
  console.log(i);
}
console.groupEnd();
console.group("루프 5");
for (let i = 0; i<3; i++){
  console.log(i);
}
console.groupEnd();


}
export default App;

//console.log의 다양한 기능.
//1. %c : css 스타일 적용.
//2. console.group :콘솔을 그룹으로 묶어서 표현.