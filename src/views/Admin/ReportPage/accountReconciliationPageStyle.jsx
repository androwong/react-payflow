
const accountReconciliationPageStyle = theme => ({
    tableContainer: {
        color: '#757575',
        fontWeight: 500,
    },
    tableTitle: {
        color: '#A30C0C',
        fontSize: '1.4rem',
        margin: '20px 0px',
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
        '& $columnDetails': {
            borderRight: '1px solid #ffffff',
            paddingLeft: '0px',
            justifyContent: 'center',
            textAlign: 'center',
        },
        '& $columnAmount': {
            paddingLeft: '0px',
            justifyContent: 'center',
        },
        '& $columnDate': {
            borderRight: '1px solid #ffffff',
            paddingLeft: '0px',
            justifyContent: 'center',
        }
    },
    tableRow: {
        display: 'flex',
        flexDirection: 'row',
        margin: '25px 0px'
    },
    columnDetails: {
        flex: 5,
        display: 'flex',
        alignItems: 'center',
        borderRight: '1px solid #D4D4D4',
    },
    columnAmount: {
        flex: 1,
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    columnDate: {
        flex: 1,
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: '1px solid #D4D4D4',
    },
    spacer: {
        height: '80px',
        width: '100%',
    },
    invoiceTitleContainer: {
        flex: 1,
        borderRight: '1px solid #D4D4D4',
        paddingTop: '5px',
        paddingBottom: '5px',
    },
    invoiceSubTitleContainer: {
        flex: 1,
        borderRight: '1px solid #D4D4D4',
        paddingTop: '5px',
        paddingBottom: '5px',
    },
    invoiceDetailContainer: {
        flex: 2,
        borderRight: '1px solid #D4D4D4',
        paddingTop: '5px',
        paddingBottom: '5px',
    },
    companyContainer: {
        flex: 2,
        paddingTop: '5px',
        paddingBottom: '5px',
    },
    category: {
        color: '#757575',
        fontSize: '1.4rem',
        margin: '25px 0px',
        fontFamily: 'Tahoma-Bold',
    },
    spacer40: {
        width: '100%',
        height: '40px',
    }
})

export default accountReconciliationPageStyle;