import React, { Component } from 'react';
import { withStyles } from '@material-ui/core'
import {  Redirect  } from 'react-router-dom'

import { connect } from 'react-redux';

import homePageStyle from './homePageStyle.jsx'

class HomePage extends Component {

  
    renderRedirectToLogin = () => {

        return <Redirect to='/login' />

    }

    render(){

        return (
            <div>
                { this.renderRedirectToLogin() }
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(homePageStyle)(HomePage));
