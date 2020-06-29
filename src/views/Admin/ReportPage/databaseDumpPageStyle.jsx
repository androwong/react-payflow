
const databaseDumpPageStyle = theme => ({
    dumpContainer: {
        width: '640px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid #707070',
        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.21)',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '60px',
        marginBottom: '120px',
    },
    componentContent: {
        marginTop: '60px',
        textAlign: 'center',
    },
    btnDownload: {
        textDecoration: 'none',
        color: 'white',
        background: '#A30C0C',
        width: '228px',
        height: '57px',
        borderRadius: '6px',
        display: 'flex',
        fontSize: '1.4rem',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0px',
    },
    componentHeader: {
        background: '#A30C0C',
        color: 'white',
        fontSize: '1.4rem',
        padding: '25px 25px',
        width: '100%',
    }
});

export default databaseDumpPageStyle;