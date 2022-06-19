import { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import {sql} from '@codemirror/lang-sql'
import {oneDark} from '@codemirror/theme-one-dark'

const Editor = () => {
    const [query, setQuery] = useState('')
    const handleData = () => {
      console.log(query.toLowerCase() === 'select * from employees')
      
    fetch('https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/categories.csv')
    .then(res => res.text())
    .then(ans => {
        const [headerLine, ...lines] = ans.split('\n');
        const headers = headerLine.split(',');
        
        const objects = lines.map((line, index) =>
        line.split(',').reduce(
            (object, value, index) => ({
              ...object,
              [headers[index]]: value,
            }),
            {}
          )
      );
      console.log(Object.keys(objects[0]))
    })
    
    }
  
    

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
           <button onClick={handleData}>Run</button>
        </div>
    )
}
export { Editor }