const baseInputStyle = theme => ({
    baseInput: {
        background: '#fafafa',
        border: '1px solid #9e9e9e',
        borderRadius: '6px',
        height: '55px',
        paddingLeft: '10px',
        fontSize: '1.3rem',
        '&:focus': {
            border: '1px solid #9e9e9e',
            outline: 'none !important',
            boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.75)',
        },
    }
});
export default baseInputStyle;