import commonStyle from 'assets/jss/commonStyle'

const budgetsPageStyle = theme => ({
    ...commonStyle,
    budgetsContainer: {
        marginTop: '40px',
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
    spacer40: {
        width: '100%',
        height: '40px',
    },
    spacer60: {
        width: '100%',
        height: '60px',
    }
});
export default budgetsPageStyle;