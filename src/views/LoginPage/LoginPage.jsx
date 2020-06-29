import React, { Component } from 'react'

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core'
import logInPageStyle from './loginPageStyle.jsx'
import BaseInput from 'components/BaseInput/index.jsx';
import Button from 'components/Button/index.jsx';

import { Link } from 'react-router-dom';

class LogInPage extends Component {

    handleClickLogin = () => {

    }

    render(){
        const { classes } = this.props;
        return (
            <div className={classes.pageContainer}>
            <div className={classes.container}>
                <div className={classes.formContainer}>
                    <div className={classes.logoContainer}>
                        <img src="/assets/img/Logo_color.png" alt="Logo"/>
                    </div>
                    <div>
                        <BaseInput placeholder="Email" type="email" className={classes.input} />
                        <BaseInput placeholder="Password" type="password" className={classes.input} />
                        <Button onClick={this.handleClickLogin} className={classes.btnLogin}>
                            Log In
                        </Button>
                        <div className={classes.orContainer}>
                            <div className={classes.underline}>
                            </div>
                            <div className={classes.spanOr}>
                                or
                            </div>
                            <div className={classes.underline}>
                            </div>
                        </div>
                        <Button onClick={this.handleClickLogin} className={classes.btnSignUp}>
                            Sign Up
                        </Button>
                    </div>
                </div>
                <div>
                    <div className={classes.copyrightLabel}>
                        Copyright © 2019 PayFlow
                    </div>
                    <div className={classes.footerNavContainer}>
                        <Link to="#" className={classes.footerNav}>
                            Contact Us
                        </Link>
                        <Link to="#" className={classes.footerNav}>
                            Privacy
                        </Link>
                        <Link to="#" className={classes.footerNav}>
                            Legal
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(logInPageStyle)(LogInPage));