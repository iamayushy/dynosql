import './App.css'
import { Grid } from '@mantine/core'
import { Common } from './components/Common'
import { Recent } from './components/Recent'
import { Editor } from './components/Editor'

const App = () => {
  return (
    <>
    <Grid p="xl" gutter="xl" columns={25}>
      <Grid.Col span={18}> 
      <Common /> 
      <br />
      <Editor/>
      </Grid.Col>
      <Grid.Col span={7}> <Recent /> </Grid.Col>
    </Grid>
    

   
    </>
  )
}
export default App
