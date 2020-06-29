import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core';
import sideNavButtonStyle from './sideNavButtonStyle';

class SideNavButton extends Component
{
    render()
    {
        const { classes, label, to, activeImage, inactiveImage } = this.props;
        return(

            <NavLink to={ to } activeClassName={ classes.linkActive } className={ classes.link } >
                <div className={ classes.navContainer }>
                    <div className={ classes.sideStatus }>
                    </div>
                    <div className={ classes.mainNavContainer }>
                        <img src={ inactiveImage } className={ classes.navInactiveImage } />
                        <img src={ activeImage } className={ classes.navActiveImage } />
                        <div className={ classes.navLabel }>
                            { label }
                        </div>
                    </div>
                </div>
            </NavLink>
        )
    }
}

export default withStyles(sideNavButtonStyle)(SideNavButton);