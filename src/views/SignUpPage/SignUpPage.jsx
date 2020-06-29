import React, { Component } from 'react'

import { connect } from 'react-redux';

import { withStyles, Checkbox } from '@material-ui/core'
import signUpPageStyle from './signUpPageStyle.jsx'
import Button from 'components/Button/index.jsx';
import RadioButton from 'components/RadioButton/index.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import Check from "@material-ui/icons/Check";
import LongCheckBox from 'components/LongCheckBox/index.jsx';
import { Link } from 'react-router-dom';
import Footer from 'components/Footer/index.jsx';

class SignUpPage extends Component {

    state = {
        userTypeSelected: false,
        userType: 'vendor',
    }

    handleClickNext = () => {
        this.setState({userTypeSelected: true});
    }

    handleClickAdmin = () => {
        this.setState({userType: 'admin'});
    }

    handleClickVendor = () => {
        this.setState({userType: 'vendor'});
    }

    handleClickBuyer = () => {
        this.setState({userType: 'buyer'});
    }

    handleClickBack = () => {
        this.setState({userTypeSelected: false});
    }

    renderSelectUserType = () => {
        const { classes } = this.props;
        const { userType } = this.state;
        if(this.state.userTypeSelected == true)
            return null;
        return(
            <div className={classes.container}>
                <div className={ classes.title }>
                    PayFlow is a secure, easy way to pay and get paid. Sign up for free.
                </div>
                <div className={ classes.radioButtonContainer }>
                    <RadioButton title="Admin" subTitle="Shop online or send and receive money. All without sharing your payment info." selected={ userType == 'admin' } onClick={ this.handleClickAdmin } />
                </div>
                <div className={ classes.radioButtonContainer }>
                    <RadioButton title="Vendor" subTitle="Accept Paypal and all cards online or at the register. Send secure invoices to your customers." selected={ userType == 'vendor' } onClick={ this.handleClickVendor }  />
                </div>
                <div className={ classes.radioButtonContainer }>
                    <RadioButton title="Buyer" subTitle="Shop Online or send and receive money. All without sharing your payment info." selected={ userType == 'buyer' }  onClick={ this.handleClickBuyer } />
                </div>
                <div className={ classes.btnNextContainer }>
                    <Button className={ classes.btnNext } onClick={ this.handleClickNext } >
                        Next
                    </Button>
                </div>
            </div>
        )
    }

    renderSignUpForm = () => {

        const { classes } = this.props;
        if(this.state.userTypeSelected == false)
            return null;
        return(
            <div className={classes.signUpFormContainer}>
                <div className={ classes.formTitle }>
                    See for your self why millions of people love PayFlow - Sign up for free
                </div>
                <form action="#" method="POST" className={ classes.signUpForm }>
                    <input type="hidden" name="user-type" value={ this.state.userType } />
                    <BaseInput name="full-name" placeholder="Legal Full Name" className={ classes.input} />
                    <BaseInput name="email" placeholder="Your Email"  className={ classes.input} type="email" />
                    <BaseInput name="password" placeholder="Create Your Password" className={ classes.input} type="password" />
                    <div className={ classes.checkboxContainer }>
                        <LongCheckBox />
                    </div>
                    <div className={ classes.actionButtonContainer }>
                        <input type="button" className={ classes.btnSubmit } value="Back" onClick={ this.handleClickBack } />
                        <input type="submit" className={ classes.btnSubmit } value="Next" />
                    </div>
                </form>
            </div>
        )
    }

    render(){
        const { classes } = this.props;
        const { userTypeSelected } = this.state;
        const mainContainerClass = userTypeSelected ? classes.pageContainer2 : classes.pageContainer;
        const logImage = userTypeSelected ? "/assets/img/Logo_color.png": "/assets/img/Logo_white.png";
        return (
            <div className={ mainContainerClass }>
                <div className={ classes.signUpHeader }>
                    <img src={ logImage } className={ classes.logoImage } />
                    <Link to="/login" className={ classes.loginNav }>
                        Log In
                    </Link>
                </div>
                <div className={ classes.contentContainer }>
                {
                    this.renderSelectUserType()
                }

                {
                    this.renderSignUpForm()
                }
                </div>
                <Footer theme={ userTypeSelected ? 'black' : 'white' } />
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(signUpPageStyle)(SignUpPage));