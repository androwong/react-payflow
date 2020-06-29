const signUpPageStyle = theme => ({
    pageContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: "url('/assets/img/bgSignUp.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    pageContainer2: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: "url('/assets/img/bgMain.png')",
        backgroundRepeat:   'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '& $signUpHeader': {
            background: 'white',
            boxShadow: '0px 1px 6px 0px rgba(0,0,0,0.20)',
        },
        '& $loginNav': {
            background: '#A30C0C',
            color: 'white',
        }
    },
    signUpHeader: {
        display: 'flex',
        alignItems: 'center',
        height: '107px',
        width: '100%',
        flexDirection: 'row',
        padding: '0px 55px',
    },
    logoImage: {
        width: '160px',
        height: '59px',
    },
    loginNav: {
        background: 'white',
        color: '#A30C0C',
        width: '123px',
        height: '59px',
        marginLeft: 'auto',
        textDecoration: 'none',
        borderRadius: '6px',
        fontSize: '1.4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '550px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'white',
        padding: '40px 35px'
    },
    radioButtonContainer: {
        marginBottom: '25px'
    },
    title: {
        fontSize: '1.6rem',
        color: '#707070',
        paddingLeft: '10px',
        paddingRight: '10px',
        textAlign: 'center',
        marginBottom: '30px',
    },
    btnNext: {
        background: '#a30c0c',
        color: 'white',
        fontSize: '1.3rem',
        display: 'inline',
        padding: '15px 35px'
    },
    btnNextContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    signUpFormContainer: {
        width: '628px',
        marginLeft: 'auto',
        marginRight: 'auto',
        background: 'white',
        padding: '50px 80px',
        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.31)',
        borderRadius: '6px',
    },
    input: {
        paddingLeft: '20px',
        width: '100%',
        marginTop: '40px',
    },
    formTitle: {
        color: '#707070',
        fontSize: '1.6rem',
        textAlign: 'center',
    },
    actionButtonContainer: {
        justifyContent: 'center',
        display: 'flex',
        marginBottom: '10px',
    },
    signUpForm: {
        marginTop: '30px'
    },
    btnSubmit: {
        background: '#A30C0C',
        color: 'white',
        fontSize: '1.3rem',
        width: '123px',
        height: '58px',
        border: '1px solid #A30C0C',
        borderRadius: '6px',
        margin: '20px',
        opacity: '0.85',
        '&:hover': {
            opacity: '1',
            cursor: 'pointer'
        },
    },
    checkedIcon: {
        width: "16px",
        height: "14px",
        border: '1px solid #000000',
    },
    uncheckedIcon: {
        width: "0px",
        height: "0px",
        padding: '6px 7px',
        border: '1px solid #000000',
    },
    checkboxContainer: {
        marginTop: '25px',
        marginBottom: '35px'
    }
});
export default signUpPageStyle;