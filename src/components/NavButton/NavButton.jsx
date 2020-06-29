import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';

class NavButton extends Component
{
    render(){
        const { classes } = this.props;
        return(
            <NavLink to={ to } activeClassName={ classes.linkActive } className={ classes.link } >

            </NavLink>
        )
    }
}