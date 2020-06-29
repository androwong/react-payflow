import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import trackPaymentPageStyle from './trackPaymentPageStyle.jsx';
import WhiteHeader from 'components/WhiteHeader/index.jsx';
import SideNavButton from 'components/SideNavButton/index.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import CheckBox from 'components/CustomCheckBox/index.jsx';
import Button from 'components/Button/index.jsx';
import Footer from 'components/Footer/index.jsx';
import InvoiceDropDown from 'components/InvoiceDropDown/index.jsx';

class TrackPaymentPage extends Component
{
    render(){
        const { classes } = this.props;

        return(
            <div className={classes.setupPageContainer}>
                <WhiteHeader />
                <div className={ classes.contentContainer }>
                    <div className= { classes.welcomeDiv }>
                        Welcome Doris decker, Pursuit LLC
                    </div>
                    <div className={ classes.pageContent }>
                        <div className={ classes.sidebar }>
                            <SideNavButton to="/setup" label="Setup" activeImage="/assets/img/man-active.png" inactiveImage="/assets/img/man-inactive.png" />
                            <SideNavButton to="/raise-invoice" label="Raise Invoice" activeImage="/assets/img/list-active.png" inactiveImage="/assets/img/list-inactive.png" />
                            <SideNavButton to="/track-payment" label="Track Payment" activeImage="/assets/img/list-active.png" inactiveImage="/assets/img/list-inactive.png" />
                        </div>
                        <div className={ classes.formContainer }>
                            <InvoiceDropDown iconUrl="/assets/img/calendar.png" category="Pending awaiting submission" />
                            <InvoiceDropDown iconUrl="/assets/img/shopping-list.png" category="Submitted and to be paid" />
                            <InvoiceDropDown iconUrl="/assets/img/tick-inside-circle.png" category="Paid Invoices" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(trackPaymentPageStyle)(TrackPaymentPage));