import './css/App.css'
import ProgressComponent from './Components/ProjectsOnScreen';
import HeaderIcon from './Components/HeaderIcon'
import Achievements from './Components/Achievements';

//RENAME TO SLIDE CONTENT

function App() {

  return (
    <>
      <HeaderIcon/>
      {/* Progress bar component + Intersection Observer */}
      <Achievements/>
      <ProgressComponent/>
      
    </>
  )
}

export default App
