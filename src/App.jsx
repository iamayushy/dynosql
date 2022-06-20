import { Paper} from '@mantine/core'
import './App.css'
import { WorkDesk } from './pages/Workdesk'

const App = () => {
  return (
    <>
    <Paper className='sp'>

      <img style={{width:'100px', padding:'1rem'}} src="https://atlan.com/assets/img/atlan-blue.6ed81a56.svg" alt="" />
    </Paper>
    <WorkDesk/>
    </>
  )
}
export default App
