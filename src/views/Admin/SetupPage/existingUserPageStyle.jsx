const existingUserPageStyle = theme => ({
    tableContainer: {
        color: '#757575',
        fontWeight: 500,
    },
    tableHeader: {
        background: '#A30C0C',
        padding: '10px 0px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '6px',
        border: '1px solid #A30C0C',
        color: '#fff',
        '& $columnName': {
            borderRight: '1px solid #ffffff',
            paddingLeft: '0px',
            justifyContent: 'center',
            textAlign: 'center',
        },
        '& $columnCategory': {
            borderRight: '1px solid #ffffff',
            paddingLeft: '0px',
            justifyContent: 'center',
        },
        '& $columnCompany': {
            borderRight: '1px solid #ffffff',
            paddingLeft: '0px',
            justifyContent: 'center',
        },
        '& $columnView': {
            borderRight: '1px solid #ffffff',
            paddingLeft: '0px',
            justifyContent: 'center',
        },
        '& $columnActions': {
            paddingTop: '5px',
            paddingBottom: '5px',
            paddingLeft: '0px',
            justifyContent: 'center',
        }
    },
    tableRow: {
        display: 'flex',
        flexDirection: 'row',
        margin: '25px 0px'
    },
    columnName: {
        flex: 2,
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        borderRight: '1px solid #D4D4D4',
    },
    columnCategory: {
        flex: 2,
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        borderRight: '1px solid #D4D4D4',
    },
    columnCompany: {
        flex: 4,
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        borderRight: '1px solid #D4D4D4',
    },
    columnView: {
        flex: 2,
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: '1px solid #D4D4D4',
    },
    columnActions: {
        flex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    suspendContainer: {
        flex: 1,
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: '1px solid #D4D4D4',
    },
    deleteContainer: {
        flex: 1,
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#A30C0C',
    }
})

export default existingUserPageStyle;