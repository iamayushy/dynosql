import React from 'react'
import { Grid } from '@mantine/core'
import { Common } from '../components/Common'
import { Recent } from '../components/Recent'
import { Editor } from '../components/Editor'
import { useState } from 'react'
import { AvailableTables } from '../components/AvailableTables'
import { getDataTable } from '../utils/Table'
import { ResultTable } from '../components/ResultTable'

const WorkDesk = () => {

    const [editorValue, setEditorValue] = useState('')
    const [recentQueries, setRecentQueries] = useState([])
    const [result, setResult] = useState([])
    const handleSuggestion = (value) => {
        setEditorValue((prev) => prev + ' ' + value)
    }
    
    const handleValues = (value) => {

        setEditorValue(value)
    }
    const handle = async(stats) => {
        const res = await getDataTable(stats)
        setResult(res)
    }

    const handleCode = () => {
        if (editorValue.length === 0) {
            return
        }
        if(editorValue.toLowerCase() === 'select * from employee_territories'.toLowerCase() ||
        editorValue.toLowerCase() === 'select * from employees'.toLowerCase()||
        editorValue.toLowerCase() === 'select * from categories'.toLowerCase()||
        editorValue.toLowerCase() === 'select * from customers'.toLowerCase()||
        editorValue.toLowerCase() === 'select * from order_details'.toLowerCase()||
        editorValue.toLowerCase() === 'select * from orders'.toLowerCase()||
        editorValue.toLowerCase() === 'select * from regions'.toLowerCase()||
        editorValue.toLowerCase() === 'select * from shippers'.toLowerCase()||
        editorValue.toLowerCase() === 'select * from suppliers'.toLowerCase()||
        editorValue.toLowerCase() === 'select * from territories'.toLowerCase())
        {
            const arrayStr = editorValue.split(' ')
            const lastValue = arrayStr[arrayStr.length - 1]

            handle(lastValue)
            
        }
        setRecentQueries([editorValue, ...recentQueries])
    }

    const handleHistory = (recentHistory) => {
        setEditorValue(recentHistory)
    }
   
   
    const handleTableData = (query) => {
        setEditorValue(`SELECT * FROM ${query}`)
        setRecentQueries([editorValue, ...recentQueries])
        handle(query)
    }
    

    
    

    return (
        <>
        <Grid p="xl" gutter="xl" columns={25}>
            <Grid.Col span={18}>
                <Common handleQueries={handleSuggestion} />
                <br />
                <Editor
                    suggetion={editorValue}
                    handleValues={handleValues}
                    handleCode={handleCode} />
            </Grid.Col>
            <Grid.Col span={7}>
                <Recent
                    recentHistory={recentQueries}
                    handleHistory={handleHistory} />
                <AvailableTables
                handleTableData = {handleTableData} />
            </Grid.Col>
          
        </Grid>
        <Grid p='xl' gutter='xl'>
            <ResultTable
            header={result.length > 0 && Object.keys(result[0])}
            body={result.length > 0 && result}/>
        </Grid>
        </>
    )
}

export { WorkDesk }