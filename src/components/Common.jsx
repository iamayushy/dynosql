import { Paper, Group, Button } from '@mantine/core';
import { CommonWords } from '../utils/CommonWords'
const Common = () => {

    return (

        <Paper className='sp' shadow="xl" p='md'>
            <Group position='center' spacing='xs'>
                {CommonWords && CommonWords.map((word, i) => {
                    return <Button color='blue' radius="sm" size="sm" uppercase key={i}>{word}</Button>
                })}
            </Group>
        </Paper>

    )
}

export { Common }