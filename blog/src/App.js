

function App() {

 

  async function fetchData(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json()
  console.log(data);
  }

  fetchData();
}
export default App;

//fetch API : 특정 URL로 네트워크요청을 보내는 웹 API