import { Paper, Group, Button } from '@mantine/core';
import { CommonWords } from '../utils/CommonWords'
const Common = () => {

    return (

        <Paper className='sp' shadow="xl" p="sm">
            <Group position='apart' spacing='md'>
                {CommonWords && CommonWords.map((word, i) => {
                    return <Button color='red' radius="sm" size="sm" uppercase key={i}>{word}</Button>
                })}
            </Group>
        </Paper>

    )
}

export { Common }