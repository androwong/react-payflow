import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import WhiteHeader from 'components/WhiteHeader/index.jsx';
import SideNavButton from 'components/SideNavButton/index.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import CheckBox from 'components/CustomCheckBox/index.jsx';
import Button from 'components/Button/index.jsx';
import Footer from 'components/Footer/index.jsx';
import InvoiceDropDown from 'components/InvoiceDropDown/index.jsx';
import trackPageStyle from './trackPageStyle.jsx';

class TrackPage extends Component
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
                            <SideNavButton to="/admin-setup" label="Setup" activeImage="/assets/img/man-active.png" inactiveImage="/assets/img/man-inactive.png" />
                            <SideNavButton to="/approve" label="Approve" activeImage="/assets/img/list-active.png" inactiveImage="/assets/img/list-inactive.png" />
                            <SideNavButton to="/track" label="Track" activeImage="/assets/img/list-active.png" inactiveImage="/assets/img/list-inactive.png" />
                            <SideNavButton to="/pay" label="pay" activeImage="/assets/img/list-active.png" inactiveImage="/assets/img/list-inactive.png" />
                            <SideNavButton to="/report" label="Report" activeImage="/assets/img/list-active.png" inactiveImage="/assets/img/list-inactive.png" />
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(trackPageStyle)(TrackPage));