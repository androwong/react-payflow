import commonStyle from 'assets/jss/commonStyle'

const trackPaymentPageStyle = theme => ({
    ...commonStyle,
    dropDownContainer: {
        marginTop: '15px',
        marginBottom: '15px',
    },
    header: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        background: '#A30C0C',
        padding: '15px 20px',
        color: 'white',
        borderRadius: '4px',
    },
    dropDownIcon: {
        marginLeft: 'auto',
        width: '27px',
        height: '27px'
    },
    iconImage: {
        width: '27px',
        height: '27px',
        marginRight: '20px'  
    },
    invoices: {
        paddingTop: '10px',
        paddingBottom: '25px',
    },

    invoiceContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: '20px',
        marginBottom: '20px',
    },
    invoiceNumberContainer: {
        flex: 2,
        paddingLeft: '30px',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRight: '1px solid #E4E4E4',
    },
    invoiceSubNumberContainer: {
        flex: 2,
        paddingLeft: '30px',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRight: '1px solid #E4E4E4',
    },
    invoiceTitle: {
        flex: 4,
        paddingLeft: '30px',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRight: '1px solid #E4E4E4',
    },
    invoiceRequestor: {
        flex: 4,
        paddingLeft: '30px',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRight: '1px solid #E4E4E4',
    },
    invoiceAmount: {
        flex: 2,
        paddingLeft: '30px',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderRight: '1px solid #E4E4E4',
    },
    invoiceDate: {
        flex: 2,
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '30px',
    },
    iconTransform: {
        transform: 'rotate(180deg)'
    }
});
export default trackPaymentPageStyle;