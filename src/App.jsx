import { Paper} from '@mantine/core'
import './App.css'
import { WorkDesk } from './pages/Workdesk'

const App = () => {
  return (
    <>
    <Paper style={{marginTop:'-1.4rem', backgroundColor:'#111111'}}>

      <h3 style={{color:'blue', padding:'1.3rem', fontSize:'1.4rem'}}>The Simple SQL Editor</h3>
    </Paper>
    <WorkDesk/>
    </>
  )
}
export default App
