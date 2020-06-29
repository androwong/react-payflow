import commonStyle from 'assets/jss/commonStyle';

const payPageStyle = theme => ({
    pageContainer: {
        background: "url('/assets/img/bgMain.png')",
        backgroundPosition: 'top center',
        backgroundRepeat:   'no-repeat',
        backgroundSize:   'cover',
        width: '100%',
    },
    contentContainer: {
        paddingLeft: '55px',
        paddingRight: '55px',
        paddingBottom: '115px'
    },
    welcomeDiv: {
        color: '#A30C0C',
        fontFamily: 'Tahoma-Regular',
        fontSize: '1.75rem',
        margin: '25px 0px',
    },
    sidebar: {
        width: '265px',
        minWidth: '265px',
        minHeight: '680px',
        maxHeight: '680px',
        background: 'white',
        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        marginRight: '30px'
    },
    pageContent: {
        display: 'flex',
        flexDirection: 'row',
    },
    formContainer: {
        background: 'white',
        width: '100%',
        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        display: 'flex',
        padding: '60px 50px',
        flexDirection: 'column',
        color: '#707070'
    },
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
        '& $columnDetails': {
            borderRight: '1px solid #ffffff',
            paddingLeft: '0px',
            justifyContent: 'center',
            textAlign: 'center',
        },
        '& $columnAmount': {
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
        flex: 8,
        display: 'flex',
        alignItems: 'center',
        borderRight: '1px solid #D4D4D4',
    },
    columnAmount: {
        flex: 1.5,
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: '1px solid #D4D4D4',
    },
    columnDate: {
        flex: 3,
        paddingTop: '5px',
        paddingBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        borderRight: '1px solid #D4D4D4',
    },
    columnView: {
        flex: 1.5,
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
    },
    tableTitle: {
        color: '#757575',
        fontSize: '1.4rem',
        marginBottom: '40px',
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
        paddingTop: '5px',
        paddingBottom: '5px',
    },
    spacer: {
        height: '80px',
        width: '100%'
    }
});

export default payPageStyle;