

function App() {

console.log([1,2,3]);
console.table([1,2,3]);
console.table([
  {
  x:10,
  y:20,
  },
  {
  x:11,
  y:21,
  },
  {
  x:12,
  y:22,
  }]);

}
export default App;

//console.log의 다양한 기능.
//1. %c : css 스타일 적용.
//2. console.group :콘솔을 그룹으로 묶어서 표현.
//3. console.Error, console.warn :콘솔에 경고 UI 추가
//4. console.table: 콘솔로 표현하는 배열을 테이블화