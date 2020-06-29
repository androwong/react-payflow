
const checkBoxStyle = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    
    checkIcon: {
        color: '#000',
        width: "23px",
        height: "23px",
        marginTop: '-9px'
    },
    unchecked: {
        width: "15px",
        height: "16px",
        border: '1px solid #717171',
        
    },
    label: {
        color: '#A30C0C',
        marginLeft: '10px',
    }
});
export default checkBoxStyle;