import React, { Component } from 'react'

import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import Button from 'components/Button/index.jsx';
import Footer from 'components/Footer/index.jsx';
import SideNavButton from 'components/SideNavButton/index.jsx';
import WhiteHeader from 'components/WhiteHeader/index.jsx';

import { withStyles } from '@material-ui/core';
import approvePageStyle from './approvePageStyle.jsx';

class ExistingUserPage extends Component
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
                            <div className={ classes.tableTitle }>
                                Vendor setup approvals
                            </div>
                            <div className={ classes.tableContainer }>
                                <div className={ classes.tableHeader }>
                                    <div className={ classes.columnName }>
                                        Name
                                    </div>
                                    <div className={ classes.columnCategory }>
                                        Category
                                    </div>
                                    <div className={ classes.columnCompany }>
                                        Company Name
                                    </div>
                                    <div className={ classes.columnDate }>
                                        Date
                                    </div>
                                    <div className={ classes.columnView }>
                                        View
                                    </div>
                                    <div className={ classes.columnActions }>
                                        Actions
                                    </div>
                                </div>
                                <div className={ classes.tableRow }>
                                    <div className={ classes.columnName }>
                                        <span style={{ marginLeft: '20px' }}>Larry Dock</span>
                                    </div>
                                    <div className={ classes.columnCategory }>
                                        <span style={{ marginLeft: '20px' }}>Vendor</span>
                                    </div>
                                    <div className={ classes.columnCompany }>
                                        <span style={{ marginLeft: '20px' }}>Pursuit LLC</span>
                                    </div>
                                    <div className={ classes.columnDate }>
                                        <span style={{ marginLeft: '20px' }}>Feb 9th, 2019</span>
                                    </div>
                                    <div className={ classes.columnView }>
                                        <img src="/assets/img/eye.png" />
                                    </div>
                                    <div className={ classes.columnActions }>
                                        <div className={ classes.suspendContainer }>
                                            Approve
                                        </div>
                                        <div className={ classes.deleteContainer }>
                                            Delete
                                        </div>
                                    </div>
                                </div>
                                <div className={ classes.tableRow }>
                                    <div className={ classes.columnName }>
                                        <span style={{ marginLeft: '20px' }}>Barry Gold</span>
                                    </div>
                                    <div className={ classes.columnCategory }>
                                        <span style={{ marginLeft: '20px' }}>Buyer</span>
                                    </div>
                                    <div className={ classes.columnCompany }>
                                        <span style={{ marginLeft: '20px' }}>TEDex Seattle</span>
                                    </div>
                                    <div className={ classes.columnDate }>
                                        <span style={{ marginLeft: '20px' }}>Feb 9th, 2019</span>
                                    </div>
                                    <div className={ classes.columnView }>
                                        <img src="/assets/img/eye.png" />
                                    </div>
                                    <div className={ classes.columnActions }>
                                        <div className={ classes.suspendContainer }>
                                            Approve
                                        </div>
                                        <div className={ classes.deleteContainer }>
                                            Reject
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )

    }

}

export default withStyles(approvePageStyle)(ExistingUserPage);