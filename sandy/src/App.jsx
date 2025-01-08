import './App.css'
import Body from './components/Body'
import Dalgona from './components/Dalgona'
import Navbar from './components/Navbar'
import PlayGame from './components/PlayGame'
function App() {

  return (
      <>
        <div className='main-container'>
          <Navbar/>
          <Body/>
          <PlayGame/>
          <Dalgona/>
        </div>
      </>      
  )
}

export default App
