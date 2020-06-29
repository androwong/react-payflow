const sideNavButtonStyle = theme => ({
    link: {
        textDecoration: 'none',
        '& $navActiveImage' : {
            display: 'none',
        },
        '& $navInactiveImage' : {
            display: 'block',
        },
        '& $sideStatus' : {
            background: '#ffffff',
            borderBottom: '1px solid #ffffff'
        },
        '& $navLabel' : {
            color: '#757575',
        },
    },
    linkActive: {
        '& $navActiveImage' : {
            display: 'block',
        },
        '& $navInactiveImage' : {
            display: 'none',
        },
        '& $sideStatus' : {
            background: '#A30C0C',
            borderBottom: '1px solid #A30C0C'
        },
        '& $navLabel' : {
            color: '#A30C0C',
        },
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
    },
    sideStatus: {
        width: '6px',
        marginRight: '10px',
    },
    navInactiveImage: {
        width: '29px',
        height: '29px',
        marginLeft: '5px'
    },
    navActiveImage: {
        width: '29px',
        height: '29px',
        marginLeft: '5px'
    },
    mainNavContainer: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid #E7E7E7',
        padding: '20px 0px',
        width: '100%'
    },
    navLabel: {
        fontFamily: 'Tahoma-Regular',
        fontSize: '1.25rem',
        color: '#757575',
        marginLeft: '15px',
    }
});
export default sideNavButtonStyle;