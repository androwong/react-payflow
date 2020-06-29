import commonStyle from 'assets/jss/commonStyle';

const rangeSliderStyle = theme => ({
    ...commonStyle,
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    rangeBar: {
        height: '35px',
        position: 'relative',
        flex: 4,
    },
    greyBackground: {
        background: '#E2E2E2',
        height: '100%',
        width: '100%',
        borderRadius: '6px',
    },
    redRange: {
        position: 'absolute',
        height: '100%',
        width: '100px',
        background: '#A30C0C',
        top: '0px',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '1.25rem'
    },
    edgeValuesContainer: {
        marginTop: '10px',
        display: 'flex',
        width: '100%',
        fontSize: '1.25rem',
        color: '#757575'
    },
    maxValue: {
        marginLeft: 'auto'
    },
    componentContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    labelContainer: {
        minWidth: '120px',
        marginTop: '5px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    rangeBarContainer: {
        
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
    }
})

export default rangeSliderStyle;