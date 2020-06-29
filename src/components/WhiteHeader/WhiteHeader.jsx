import React, {Component} from 'react'

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import whiteHeaderStyle from './whiteHeaderStyle.jsx';


class WhiteHeader extends Component
{
    render(){
        const { classes } = this.props;

        return(
            <div className={ classes.headerContainer }>
                <img src="/assets/img/Logo_color.png" className={ classes.headerLogoImage } />
                <div className={ classes.headerButtonContainer }>
                    <img src="/assets/img/settings.png" className={ classes.headerButtonImg } />
                    <img src="/assets/img/notification.png" className={ classes.headerButtonImg } />
                    <div className={ classes.spanUserName }>John Doe</div>
                    <img src="/assets/img/logout.png" className={ classes.headerButtonImg } />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(whiteHeaderStyle)(WhiteHeader));