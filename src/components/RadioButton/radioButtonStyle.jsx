
const radioButtonStyle = theme => ({
    radioButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    outerCircle: {
        width: '22px',
        height: '22px',
        minWidth: '22px',
        minHeight: '22px',
        borderRadius: '20px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#a30c0c',
        marginTop: '2px',
        position: 'relative'
    },
    innerCircle: {
        width: '8px',
        height: '8px',
        minWidth: '8px',
        minHeight: '8px',
        borderRadius: '20px',
        background: '#a30c0c',
        position: 'absolute',
        left: '6px',
        top: '6px'
    },
    labelContainer: {
        marginLeft: '15px',
    },
    radioButtonTitle: {
        fontFamily: 'SegoeUI-Bold',
        fontSize: '1.3rem',
        color: '#a30c0c',
    },
    radioButtonSubTitle: {
        marginTop: '8px',
        fontFamily: 'SegoeUI',
        fontSize: '1rem',  
        color: '#707070',
    }
});
export default radioButtonStyle;