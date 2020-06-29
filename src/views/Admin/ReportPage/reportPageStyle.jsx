import commonStyle from 'assets/jss/commonStyle'

const reportPageStyle = theme => ({
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
    tabContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '30px',
    },
    inactiveNav: {
        width: '228px',
        height: '57px',
        border: '1px solid #757575',
        color: '#757575',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '6px',
        fontSize: '1.3rem',
        marginRight: '30px',
    },
    inactiveBudgetNav: {
        width: '175px',
        height: '57px',
        border: '1px solid #757575',
        color: '#757575',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '6px',
        fontSize: '1.3rem',
        marginRight: '30px',
    },
    activeNav: {
        color: '#fff',
        border: '1px solid #A30C0C',
        background: '#A30C0C'
    },
    user: {
        marginRight: '40px',
        marginLeft: '20px',
        fontSize: '1.3rem',
    },
    tabLeftWrapper: {
        display: 'flex',
        flexDirection: 'row', 
        padding: '10px 0px',
        alignItems: 'center',
        borderRight: '1px solid #DBDBDB',
        marginRight: '30px',
    },
    activeGeyNav: {
        color: '#fff',
        border: '1px solid #757575',
        background: '#757575',
    },
    inputLabel: {
        marginBottom: '20px',
        marginTop: '40px',
    },
    input: {
        width: '100%'
    },
    btnSubmit: {
        background: '#A30C0C',
        color: 'white',
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '13px',
        paddingRight: '13px',
        width: '120px',
        display: 'inline-block',
        fontSize: '1.4rem',
    },
    submitContainer: {
        marginTop: '60px',
        marginBottom: '150px',
    },
    subFormTitle: {
        color: '#A30C0C',
        fontSize: '1.4rem',
        paddingLeft: '5px',
    },
    subFormContainer: {
        paddingLeft: '10px',
        paddingRight: '10px',
        borderBottom: '1px solid #DDDDDD',
        marginTop: '40px',
    },
    btnDatabaseDump: {
        color: '#A30C0C',
        fontSize: '1.4rem',
        textDecoration: 'none',
        marginLeft: '30px',
    }
});
export default reportPageStyle;