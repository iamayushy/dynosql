import CodeMirror from '@uiw/react-codemirror'
import {sql} from '@codemirror/lang-sql'
import {oneDark} from '@codemirror/theme-one-dark'
import { Button, Text } from '@mantine/core'

const Editor = ({suggetion, handleValues, handleCode}) => {

    return (
        <div>
        <Text weight='500' size='lg' color='white'>SQL Editor</Text>
           <br />
           <CodeMirror
           value={suggetion}
           height='480px'
           theme={oneDark}
           extensions={sql()}
           onChange={handleValues}
           className='code-editor'
           placeholder={'Your Data Search Starts Here'}
           />
           <br />
           <Button onClick={handleCode} color='red'>Run</Button>
        </div>
    )
}
export { Editor }