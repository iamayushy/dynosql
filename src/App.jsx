import './App.css'
import { Grid } from '@mantine/core'
import { Common } from './components/Common'
import { Recent } from './components/Recent'

const App = () => {
  return (
    <Grid p="xl" gutter="xl" columns={24}>
      <Grid.Col span={17}> <Common /> </Grid.Col>
      <Grid.Col span={7}> <Recent /> </Grid.Col>
    </Grid>
  )
}
export default App
