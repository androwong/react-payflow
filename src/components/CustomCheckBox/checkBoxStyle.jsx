const checkBoxStyle = theme => ({
    container: {
        display: 'inline-block'
    },
    checked: {
        color: '#A30C0C',
        fill: '#F8F8F8',
        backgroundColor: '#F8F8F8',
        '&:hover' : {
            backgroundColor: '#F8F8F8'
        }
    },
    root: {
        border: '1px solid #707070',
        fill: '#F8F8F8',
    },
    checkedIcon: {
        width: "28px",
        height: "26px",
        border: "1px solid #707070",
        backgroundColor: '#F8F8F8',
        borderRadius: "4px",
    },
    uncheckedIcon: {
        width: "0px",
        height: "0px",
        padding: '12px 13px',
        border: "1px solid #707070",
        backgroundColor: '#F8F8F8',
        borderRadius: "4px",
    },
});
export default checkBoxStyle;