

function App() {

function one(){
  function two(){
    console.trace();
  }
  two();
}
one();

}
export default App;

//console.log의 다양한 기능.
//1. %c : css 스타일 적용.
//2. console.group :콘솔을 그룹으로 묶어서 표현.
//3. console.Error, console.warn :콘솔에 경고 UI 추가
//4. console.table: 콘솔로 표현하는 배열을 테이블화
//5. console.time : 시간 측정
//6. console.trace : 코드가 어떤 함수로 부터 출력되는지 추적 