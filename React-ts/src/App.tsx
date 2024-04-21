import './css/App.css'
import ProgressComponent from './Components/ProjectsOnScreen';
import HeaderIcon from './Components/HeaderIcon'

//RENAME TO SLIDE CONTENT

function App() {

  return (
    <>
      <HeaderIcon/>
      {/* Progress bar component + Intersection Observer */}
      <ProgressComponent/>
      
    </>
  )
}

export default App
