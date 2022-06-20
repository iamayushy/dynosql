import { Paper} from '@mantine/core'
import './App.css'
import atlan from '../src/asset/atlan.svg'
import { WorkDesk } from './pages/Workdesk'

const App = () => {
  return (
    <>
    <Paper className='sp'>

      <img style={{width:'100px', padding:'1rem'}} src={atlan} alt="" />
    </Paper>
    <WorkDesk/>
    </>
  )
}
export default App
