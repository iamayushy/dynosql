import { Paper} from '@mantine/core'
import './App.css'
import atlan from '../src/asset/atlan.svg'
import { WorkDesk } from './pages/Workdesk'

const App = () => {
  return (
    <>
    <Paper className='sp'>

      <img style={{padding:'1rem'}} width='100px' src={atlan} alt="" />
    </Paper>
    <WorkDesk/>
    </>
  )
}
export default App
