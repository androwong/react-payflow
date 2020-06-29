import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import footerStyle from './footerStyle.jsx'
import { withStyles } from '@material-ui/core';

const whiteTheme = {
    primaryColor: '#fff'
}

const blackTheme = {
    primaryColor: '#000'
}
const getThemes = (theme) => {

    switch(theme)
    {
        case 'white':
            return whiteTheme;
        case 'black':
            return blackTheme;
    }
}

class Footer extends Component
{

    

    render()
    {
        const { classes, theme } = this.props;
        const primaryColor = theme == 'white' ? '#fff' : '#000';
        return(
            <div className={ classes.footerContainer } style={{ color: primaryColor, borderTop: `1px solid ${primaryColor}` }}>
                <div className={ classes.footerContent }>
                    <div className={ classes.copyRightContainer }>
                        Copyright © 2019 PayFlow
                    </div>
                    <div className={ classes.footerNavContainer }>
                        <Link to="/contact-us" className={ classes.navLink } style={{ color: primaryColor }}>
                            Contact Us
                        </Link>
                        <Link to="/privacy" className={ classes.navLink } style={{ color: primaryColor }} >
                            Privacy
                        </Link>
                        <Link to="/legal" className={ classes.navLink } style={{ color: primaryColor }} >
                            Legal
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

Footer.defaultProps = {
    theme: 'black'
};

export default withStyles(footerStyle)(Footer);