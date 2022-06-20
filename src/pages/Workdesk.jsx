import { Grid } from '@mantine/core'
import { Common } from '../components/Common'
import { Recent } from '../components/Recent'
import { Editor } from '../components/Editor'
import { useState } from 'react'
import { AvailableTables } from '../components/AvailableTables'

const WorkDesk = () => {

    const [editorValue, setEditorValue] = useState('')
    const [recentQueries, setRecentQueries] = useState([])
    const handleSuggestion = (value) => {
        setEditorValue((prev) => prev + ' ' + value)
    }

    const handleValues = (value) => {
        
        setEditorValue(value)
    }

    const handleCode = () => {
        if(editorValue.length === 0){
            return
        }
        setRecentQueries([editorValue ,...recentQueries])
    }

    const handleHistory = (recentHistory) => {
        setEditorValue(recentHistory)
    }
    

    return (
        <Grid p="xl" gutter="xl" columns={25}>
            <Grid.Col span={18}>
                <Common handleQueries={handleSuggestion} />
                <br />
                <Editor
                 suggetion={editorValue}
                 handleValues={handleValues}
                 handleCode={handleCode}/>
            </Grid.Col>
            <Grid.Col span={7}> 
            <Recent 
            recentHistory={recentQueries}
            handleHistory={handleHistory}/> 
            <AvailableTables/>
            </Grid.Col>
        </Grid>
    )
}

export { WorkDesk }