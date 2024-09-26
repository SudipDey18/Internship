import './App.css'
// import Card from './component/Card'
import Card from './component/Card'

function App() {
  let user1={
    Name : "Sudip Dey",
    age : 19,
    gmail : "sdey7584@gmail.com",
    img : "https://drive.google.com/file/d/1CV7KvGFqp2YoyjIMMN9_h7f-ZHBbm_RW/view?usp=drive_link",
  }
  return (
    <>
      <Card about={user1} ></Card>
    </>
  )
}

export default App
