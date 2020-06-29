import commonStyle from 'assets/jss/commonStyle'

const reviewInvoicesPageStyle = theme => ({
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
    dateContainer: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        fontSize: '1.4rem',
    },
    iconImage: {
        width: '34px',
        height: '34px',
        marginRight: '20px',
    },
    leftWrapper: {
        borderRight: '1px solid #E1E1E1',
    },
    itemContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.4rem',
        margin: '25px 0px',
        paddingLeft: '40px',
        paddingRight: '60px'
    },
});
export default reviewInvoicesPageStyle;