import { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import {sql} from '@codemirror/lang-sql'
import {oneDark} from '@codemirror/theme-one-dark'
import { Button } from '@mantine/core'
import { getDataTable } from '../utils/Table'
import { useEffect } from 'react'



const Editor = () => {
    const [query, setQuery] = useState('')
    const [title, setTitle] = useState({})
   

    const eachData = async(input) => {
      const res = await getDataTable(input)
      
      setTitle(res)

    }
    useEffect(() => {
        eachData('categories')
        
    }, [])
  

    

  
    
    return (
        <div>
           <CodeMirror
           value={query}
           height='400px'
           theme={oneDark}
           extensions={sql()}
           onChange={(value) => {
            setQuery(value)
           }}
           className='code-editor'
           placeholder={'Your Data Search Starts Here'}
           />
           <br />
           <Button color='red'>Run</Button>

           {title !== null && Object.keys(title[0]).map(ele=> {
            return <h1 style={{color:'wheat'}}>{ele}</h1>
           })}
           {console.log(title)}
        </div>

        
    )
}
export { Editor }