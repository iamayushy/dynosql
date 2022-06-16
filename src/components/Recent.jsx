import { Paper, Button, Text } from "@mantine/core"
const Recent = () => {
    return (

        <Paper className="sp" shadow="xl" p="md">
            <Text color="white">Recent Queries</Text>
            <div className="recent-box">
                <Button color="green" fullWidth>Select</Button>
                <Button color="green" fullWidth>Select</Button>
                <Button color="green" fullWidth>Select</Button>
                <Button color="green" fullWidth>Select</Button>
                <Button color="green" fullWidth>Select</Button>
                <Button color="green" fullWidth>Select</Button>
                <Button color="green" fullWidth>Select</Button>
            </div>
        </Paper>

    )
}
export { Recent }