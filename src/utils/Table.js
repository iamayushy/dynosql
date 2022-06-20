const getDataTable = async (datas) => {
    const response = await fetch(`https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${datas}.csv`)

    const data = await response.text()
    const [title, ...values] = data.split('\n')

    const topTitle = title.split(',')

    const dataObject = values.map((ele) =>
        ele
            .split(',')
            .reduce(
                (dataObject, value, index) => ({
                    ...dataObject,
                    [topTitle[index]]: value,
                }),
                {}
            )
    );

    return dataObject

}
    export { getDataTable }