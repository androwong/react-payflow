import commonStyle from 'assets/jss/commonStyle'

const setupPageStyle = theme => ({
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
    formHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '110px'
    },
    formLabelContainer: {
        borderRight: '1px solid #E9E9E9',
        padding: '5px 5px',
        display: 'flex',
        flex: 3,
        flexDirection: 'column',
    },
    companyTitle: {
        color: '#707070',
        marginTop: '10px'
    },
    formNumberContainer: {
        color: '#707070',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '-10px'
    },
    formLabel: {
        fontSize: '1.1rem',
    },
    formNumber: {
        marginLeft: '15px',
        marginTop: '-10px',
        color: '#707070',
        fontFamily: 'Tahoma-Bold',
        fontSize: '3.1rem'
    },
    subTitleContainer: {
        flex: 6,
        borderRight: '1px solid #E9E9E9',
    },
    redTitle: {
        color: '#A30C0C',
        fontSize: '1.4rem',
        textAlign: 'center',
    },
    infoUrl: {
        color: '#707070',
        textAlign: 'center',
        marginTop: '18px',
    },
    hintContainer: {
        flex: 2,
        color: '#707070',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    divider: {
        marginTop: '50px',
        marginBottom: '50px',
        borderBottom: '1px solid #E9E9E9',
        height: '1px',
        width: '100%',
    },
    colorRed: {
        color: '#A30C0C',
    },
    
    partTitle: {
        fontFamily: 'Tahoma-Bold',
        fontSize: '1.1rem',
    },
    partNumber: {
        color: '#A30C0C',
        fontSize: '1.4rem',
        marginRight: '25px',
    },
    oneLetterInput: {
        width: '40px',
        marginRight: '10px',
        fontSize: '1.4rem',
        paddingLeft: '12px'
    },
    orLabel: {
        color: '#A30C0C',
        marginTop: '20px',
        fontSize: '1.4rem'
    },
    btnSave: {
        background: '#A30C0C',
        color: 'white',
        padding: '11px 30px',
        width: '120px',
        display: 'inline-block',
        fontSize: '1.4rem'
    },
    btnSubmit: {
        background: '#A30C0C',
        color: 'white',
        paddingTop: '11px',
        paddingBottom: '11px',
        paddingLeft: '13px',
        paddingRight: '13px',
        width: '120px',
        display: 'inline-block',
        fontSize: '1.4rem'
    }
});
export default setupPageStyle;