import commonStyle from 'assets/jss/commonStyle'

const raiseInvoicePageStyle = theme => ({
    ...commonStyle,
    setupPageContainer: {
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
    redTitle: {
        color: '#A30C0C',
        fontSize: '1.4rem',
        textAlign: 'center',
    },
    input: {
        width: '100%'
    },
    btnSubmit: {
        textAlign: 'center',
        borderRadius: '6px',
        opacity: '0.85',
        '&:hover': {
            opacity: '1',
            cursor: 'pointer'
        },
        background: '#A30C0C',
        color: 'white',
        paddingTop: '11px',
        paddingBottom: '11px',
        paddingLeft: '13px',
        paddingRight: '13px',
        width: '120px',
        display: 'inline-block',
        fontSize: '1.4rem'
    },
    uploadAttachment: {
        color: '#A30C0C',
        fontSize: '1.4rem',
    },
    attachmentImg: {
        width: '26px',
        height: '26px',
        minWidth: '26px',
        minHeight: '26px',
        marginRight: '20px',
    },
    attachmentContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
        margin: '15px 0px',
    },
    addIcon: {
        marginLeft: '30px',
    },
    uploadAttachmentContainer: {
        display: 'flex',
        alignItems: 'center',
        '&:hover' : {
            cursor: 'pointer',
        }
    }
});
export default raiseInvoicePageStyle;