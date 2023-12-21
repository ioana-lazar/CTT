import './App.css'
import FunnyPictures from './components/FunnyPictures'
import LatestPictures from './components/LatestPictures'
import PictureOfTheDay from './components/PictureOfTheDay'

function App() {

  return (
    <div>
      <PictureOfTheDay />
      <LatestPictures />
      <FunnyPictures />
    </div>
  )
}

export default App
