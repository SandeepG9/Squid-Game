import './App.css'
import Body from './components/Body'
import Dalgona from './components/Dalgona'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import PlayGame from './components/PlayGame'
function App() {

  return (
      <>
        <div className='main-container'>
          <Navbar/>
          <Body/>
          <PlayGame/>
          <Footer/>
        </div>
      </>      
  )
}

export default App
