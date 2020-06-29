import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import trackPerformancePageStyle from './trackPerformancePageStyle.jsx';
import WhiteHeader from 'components/WhiteHeader/index.jsx';
import SideNavButton from 'components/SideNavButton/index.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import CheckBox from 'components/CustomCheckBox/index.jsx';
import Button from 'components/Button/index.jsx';
import Footer from 'components/Footer/index.jsx';
import InvoiceDropDown from 'components/InvoiceDropDown/index.jsx';
import RangeSlider from 'components/RangeSlider/index.jsx';

class TrackPerformancePage extends Component
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
                            <SideNavButton to="/buy-request" label="Buy Request" activeImage="/assets/img/man-active.png" inactiveImage="/assets/img/man-inactive.png" />
                            <SideNavButton to="/review-invoices" label="Review Invoices" activeImage="/assets/img/list-active.png" inactiveImage="/assets/img/list-inactive.png" />
                            <SideNavButton to="/track-performance" label="Track Performance" activeImage="/assets/img/list-active.png" inactiveImage="/assets/img/list-inactive.png" />
                        </div>
                        <div className={ classes.formContainer }>
                            <div className={ classes.dateContainer }>
                                <img src="/assets/img/money-bag.png" className={ classes.iconImage } />
                                <span className={ classes.colorPrimary }>Budget vs Spend |</span>&nbsp;Feb 9th 2019
                            </div>
                            <GridContainer>
                                <GridItem xs={12}>
                                    <RangeSlider max={ 30000 } current={ 20000 } className={ classes.marginVertical_40 } />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={6} className={ classes.leftWrapper }>
                                    <div className={ classes.itemContainer } >
                                        <span className={ classes.colorPrimary }>Events</span>
                                    </div>
                                    <div className={ classes.itemContainer } >
                                        <RangeSlider max={ 50000 } current={ 30000 } label="Events1" />
                                    </div>
                                    <div className={ classes.itemContainer } >
                                        <RangeSlider max={ 50000 } current={ 30000 } label="Events1" />
                                    </div>
                                    <div className={ classes.itemContainer } >
                                        <RangeSlider max={ 50000 } current={ 30000 } label="Events1" />
                                    </div>
                                </GridItem>
                                <GridItem xs={6}>
                                    <div className={ classes.itemContainer } >
                                        <span className={ classes.colorPrimary }>Categories</span>
                                    </div>
                                    <div className={ classes.itemContainer } >
                                        <RangeSlider max={ 50000 } current={ 30000 } label="Catering" />
                                    </div>
                                    <div className={ classes.itemContainer } >
                                        <RangeSlider max={ 50000 } current={ 30000 } label="Comms" />
                                    </div>
                                    <div className={ classes.itemContainer } >
                                        <RangeSlider max={ 50000 } current={ 30000 } label="Transport" />
                                    </div>
                                </GridItem>
                            </GridContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(trackPerformancePageStyle)(TrackPerformancePage));