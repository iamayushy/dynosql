import { Paper, Button, Text } from "@mantine/core"
const Recent = () => {
    return (

        <Paper className="sp" shadow="xl" p="md">
            <Text color="white">Recent Queries</Text>
            <div  className="recent-box">
                <Button fullWidth>Select</Button>
                <Button fullWidth>Select</Button>
                <Button fullWidth>Select</Button>
                <Button fullWidth>Select</Button>
                <Button fullWidth>Select</Button>
                <Button fullWidth>Select</Button>
                <Button fullWidth>Select</Button>
            </div>
        </Paper>

    )
}
export { Recent }