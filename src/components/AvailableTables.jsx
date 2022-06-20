import { Paper, Group, Button, Text } from '@mantine/core';

const AvailableTables = ({handle}) => {
    const Tables = [
        'employee_territories',
        'employees',
        'categories',
        'customers',
        'order_details',
        'orders',
        'product',
        'regions',
        'shippers',
        'suppliers',
        'territories'
    ]
    return (
        <div style={{ marginTop: '1.8rem' }}>
            <Text size='lg' weight='500' color='white' >Tables </Text>
            <br />
            <Paper className='sp' shadow='xl' p='md'>
                
                <Group  spacing='md'>
                    {Tables && Tables.map(data => (
                        <Button onClick={() => handleTableData(data)} color='red'>{data}</Button>
                    ))}
                </Group>
            </Paper>
        </div>

    )
}
export { AvailableTables }