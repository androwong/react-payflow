import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import buyRequestPageStyle from './buyRequestPageStyle.jsx';
import WhiteHeader from 'components/WhiteHeader/index.jsx';
import SideNavButton from 'components/SideNavButton/index.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import CheckBox from 'components/CustomCheckBox/index.jsx';
import Button from 'components/Button/index.jsx';
import Footer from 'components/Footer/index.jsx';

class BuyRequestPage extends Component
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
                            <GridContainer spacing={40}>
                                <GridItem xs={3}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            Event ID, Name
                                        </GridItem>
                                        <GridItem xs={12} className={ classes.marginVertical_25 }>
                                            <BaseInput className={ classes.input }/>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={3}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            Product or Service Category
                                        </GridItem>
                                        <GridItem xs={12} className={ classes.marginVertical_25 }>
                                            <BaseInput className={ classes.input }/>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={6}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            Vendor
                                        </GridItem>
                                        <GridItem xs={12} className={ classes.marginVertical_25 }>
                                            <BaseInput className={ classes.input }/>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                            <GridContainer spacing={40}>
                                <GridItem xs={9}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            Short Decription
                                        </GridItem>
                                        <GridItem xs={12} className={ classes.marginVertical_25 }>
                                            <BaseInput className={ classes.input }/>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                                <GridItem xs={3}>
                                    <GridContainer>
                                        <GridItem xs={12}>
                                            Invoice value
                                        </GridItem>
                                        <GridItem xs={12} className={ classes.marginVertical_25 }>
                                            <BaseInput className={ classes.input }/>
                                        </GridItem>
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem className={ classes.marginVertical_25 }>
                                    <span className={ classes.uploadAttachment }>Upload attachment</span>
                                </GridItem>
                            </GridContainer>
                            <div className={ classes.attachmentSection }>
                                <div className={ classes.attachmentContainer }>
                                    <img src="/assets/img/attachment-inactive.png" alt="attachment" className={ classes.attachmentImg }/>
                                    Document 1
                                </div>
                                <div className={ classes.attachmentContainer }>
                                    <img src="/assets/img/attachment-inactive.png" alt="attachment" className={ classes.attachmentImg }/>
                                    Document 2
                                </div>
                                <div className={ classes.attachmentContainer }>
                                    <img src="/assets/img/attachment-inactive.png" alt="attachment" className={ classes.attachmentImg }/>
                                    Document 3
                                </div>
                                <div className={ classes.attachmentContainer }>
                                    <img src="/assets/img/attachment-inactive.png" alt="attachment" className={ classes.attachmentImg }/>
                                    Document 4
                                </div>
                            </div>
                            <GridContainer>
                                <GridItem xs={12} className={ classes.marginVertical_40 }>
                                    <Button className={ `${classes.btnSubmit}` }>
                                        Submit
                                    </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(buyRequestPageStyle)(BuyRequestPage));