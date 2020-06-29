const logInPageStyle = theme => ({
    pageContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        background: "url('/assets/img/bgMain.png')",
        backgroundPosition: 'top center',
        backgroundRepeat:   'no-repeat',
        backgroundSize:   'cover',
    },
    container: {
        width: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    formContainer: {
        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.41)',
        padding: '40px 70px',
        borderRadius: '6px',
        background: 'white',
    },
    logoContainer: {
        justifyContent: 'center',
        display: 'flex',
        marginBottom: '30px'
    },
    input: {
        width: '100%',
        marginBottom: '30px',
    },
    btnLogin: {
        background: '#a30c0c',
        padding: '20px 0px',
        width: '100%',
        color: 'white',
    },
    orContainer: {
        flexDirection: 'row',
        display: 'flex',
        marginTop: '30px'
    },
    underline: {
        borderBottom: '1px solid #e1e1e1',
        flex: 1,
        height: '12px',
    },
    spanOr: {
        padding: '0px 15px',
        fontSize: '1rem',
        color: '#757575',

    },
    btnSignUp: {
        marginTop: '45px',
        marginBottom: '5px',
        background: '#e1e1e1',
        padding: '20px 0px',
        width: '100%',
    },
    copyrightLabel: {
        textAlign: 'center',
        marginTop: '40px',
    },
    footerNav: {
        textDecoration: 'none',
        color: 'black',
        margin: '0px 10px'
    },
    footerNavContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
    }
});
export default logInPageStyle;