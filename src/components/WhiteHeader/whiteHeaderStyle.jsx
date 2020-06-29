
const whiteHeaderStyle = theme => ({
    headerContainer: {
        background: 'white',
        height: '107px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '0px 55px',
        boxShadow: '0px 1px 6px 0px rgba(0,0,0,0.20)',
    },
    headerLogoImage: {
        width: '162px',
        height: '59px',
    },
    headerButtonContainer: {
        right: '55px',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    headerButtonImg: {
        marginRight: '25px',
        '&:hover' : {
            cursor: 'pointer',
        }
    },
    spanUserName: {
        fontSize: '1.6rem',
        color: '#707070',
        display: 'inline-block',
        marginRight: '25px',
        height: '100%',
        color: '#707070',
        fontFamily: 'Tahoma-Regular'
    }
});
export default whiteHeaderStyle;