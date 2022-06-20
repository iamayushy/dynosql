import { Paper, Button, Text } from "@mantine/core"
const Recent = ({recentHistory, handleHistory}) => {
    return (
        <>
        <Text color='white' weight='500' size='lg'>Recent Queries</Text>
        <br />
        <Paper className="sp" shadow="xl" p="md">
           
            <div  className="recent-box">
                {recentHistory.length === 0 && <Button color='red' fullWidth>😁 I can remember your queries.</Button>}
                {recentHistory && recentHistory.map((btn, index) => (
                    <Button color='red' onClick={() => handleHistory(btn)} key={index} fullWidth>{btn}</Button>
                ))}
            </div>
        </Paper>
    </>
    )
}
export { Recent }