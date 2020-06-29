import React, { Component } from 'react'

import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import Button from 'components/Button/index.jsx';
import Footer from 'components/Footer/index.jsx';
import SideNavButton from 'components/SideNavButton/index.jsx';
import WhiteHeader from 'components/WhiteHeader/index.jsx';

import { withStyles } from '@material-ui/core';

import payPageStyle from './payPageStyle.jsx';

class PayPage extends Component
{

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.pageContainer}>
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
                                Invoice Due Today
                            </div>
                            <div className={ classes.tableContainer }>
                                <div className={ classes.tableHeader }>
                                    <div className={ classes.columnDetails }>
                                        Details
                                    </div>
                                    <div className={ classes.columnDate }>
                                        Date
                                    </div>
                                    <div className={ classes.columnAmount }>
                                        $
                                    </div>
                                    <div className={ classes.columnView }>
                                        View
                                    </div>
                                    <div className={ classes.columnActions }>
                                        Actions
                                    </div>
                                </div>
                                <div className={ classes.tableRow }>
                                    <div className={ classes.columnDetails }>
                                        <div className={ classes.invoiceTitleContainer }>
                                            <span style={{ marginLeft: '20px' }}>Inv# 12345</span>
                                        </div>
                                        <div className={ classes.invoiceSubTitleContainer }>
                                            <span style={{ marginLeft: '20px' }}>Ev#ABCDE</span>
                                        </div>
                                        <div className={ classes.invoiceDetailContainer }>
                                            <span style={{ marginLeft: '20px' }}>Catering services...</span>
                                        </div>
                                    </div>
                                    <div className={ classes.columnDate }>
                                        <span style={{ marginLeft: '20px' }}>To be paid 21th Feb</span>
                                    </div>
                                    <div className={ classes.columnAmount }>
                                        $500
                                    </div>
                                    <div className={ classes.columnView }>
                                        <img src="/assets/img/eye.png" />
                                    </div>
                                    <div className={ classes.columnActions }>
                                        <div className={ classes.suspendContainer }>
                                            Approve
                                        </div>
                                        <div className={ classes.deleteContainer }>
                                            Hold
                                        </div>
                                    </div>
                                </div>
                                <div className={ classes.tableRow }>
                                    <div className={ classes.columnDetails }>
                                        <div className={ classes.invoiceTitleContainer }>
                                            <span style={{ marginLeft: '20px' }}>Inv# 12345</span>
                                        </div>
                                        <div className={ classes.invoiceSubTitleContainer }>
                                            <span style={{ marginLeft: '20px' }}>Ev#ABCDE</span>
                                        </div>
                                        <div className={ classes.invoiceDetailContainer }>
                                            <span style={{ marginLeft: '20px' }}>Catering services...</span>
                                        </div>
                                    </div>
                                    <div className={ classes.columnDate }>
                                        <span style={{ marginLeft: '20px' }}>To be paid 21th Feb</span>
                                    </div>
                                    <div className={ classes.columnAmount }>
                                        $500
                                    </div>
                                    <div className={ classes.columnView }>
                                        <img src="/assets/img/eye.png" />
                                    </div>
                                    <div className={ classes.columnActions }>
                                        <div className={ classes.suspendContainer }>
                                            Approve
                                        </div>
                                        <div className={ classes.deleteContainer }>
                                            Hold
                                        </div>
                                    </div>
                                </div>
                                <div className={ classes.tableRow }>
                                    <div className={ classes.columnDetails }>
                                        <div className={ classes.invoiceTitleContainer }>
                                            <span style={{ marginLeft: '20px' }}>Inv# 12345</span>
                                        </div>
                                        <div className={ classes.invoiceSubTitleContainer }>
                                            <span style={{ marginLeft: '20px' }}>Ev#ABCDE</span>
                                        </div>
                                        <div className={ classes.invoiceDetailContainer }>
                                            <span style={{ marginLeft: '20px' }}>Catering services...</span>
                                        </div>
                                    </div>
                                    <div className={ classes.columnDate }>
                                        <span style={{ marginLeft: '20px' }}>To be paid 21th Feb</span>
                                    </div>
                                    <div className={ classes.columnAmount }>
                                        $500
                                    </div>
                                    <div className={ classes.columnView }>
                                        <img src="/assets/img/eye.png" />
                                    </div>
                                    <div className={ classes.columnActions }>
                                        <div className={ classes.suspendContainer }>
                                            Approve
                                        </div>
                                        <div className={ classes.deleteContainer }>
                                            Hold
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={ classes.spacer }></div>
                            <div className={ classes.tableTitle }>
                                Invoice Overdue - On hold
                            </div>
                            <div className={ classes.tableContainer }>
                                <div className={ classes.tableHeader }>
                                    <div className={ classes.columnDetails }>
                                        Details
                                    </div>
                                    <div className={ classes.columnDate }>
                                        Date
                                    </div>
                                    <div className={ classes.columnAmount }>
                                        $
                                    </div>
                                    <div className={ classes.columnView }>
                                        View
                                    </div>
                                    <div className={ classes.columnActions }>
                                        Actions
                                    </div>
                                </div>
                                <div className={ classes.tableRow }>
                                    <div className={ classes.columnDetails }>
                                        <div className={ classes.invoiceTitleContainer }>
                                            <span style={{ marginLeft: '20px' }}>Inv# 12345</span>
                                        </div>
                                        <div className={ classes.invoiceSubTitleContainer }>
                                            <span style={{ marginLeft: '20px' }}>Ev#ABCDE</span>
                                        </div>
                                        <div className={ classes.invoiceDetailContainer }>
                                            <span style={{ marginLeft: '20px' }}>Catering services...</span>
                                        </div>
                                    </div>
                                    <div className={ classes.columnDate }>
                                        <span style={{ marginLeft: '20px' }}>To be paid 21th Feb</span>
                                    </div>
                                    <div className={ classes.columnAmount }>
                                        $500
                                    </div>
                                    <div className={ classes.columnView }>
                                        <img src="/assets/img/eye.png" />
                                    </div>
                                    <div className={ classes.columnActions }>
                                            Approve
                                    </div>
                                </div>
                                <div className={ classes.tableRow }>
                                    <div className={ classes.columnDetails }>
                                        <div className={ classes.invoiceTitleContainer }>
                                            <span style={{ marginLeft: '20px' }}>Inv# 12345</span>
                                        </div>
                                        <div className={ classes.invoiceSubTitleContainer }>
                                            <span style={{ marginLeft: '20px' }}>Ev#ABCDE</span>
                                        </div>
                                        <div className={ classes.invoiceDetailContainer }>
                                            <span style={{ marginLeft: '20px' }}>Catering services...</span>
                                        </div>
                                    </div>
                                    <div className={ classes.columnDate }>
                                        <span style={{ marginLeft: '20px' }}>To be paid 21th Feb</span>
                                    </div>
                                    <div className={ classes.columnAmount }>
                                        $500
                                    </div>
                                    <div className={ classes.columnView }>
                                        <img src="/assets/img/eye.png" />
                                    </div>
                                    <div className={ classes.columnActions }>
                                            Approve
                                    </div>
                                </div>
                                <div className={ classes.tableRow }>
                                    <div className={ classes.columnDetails }>
                                        <div className={ classes.invoiceTitleContainer }>
                                            <span style={{ marginLeft: '20px' }}>Inv# 12345</span>
                                        </div>
                                        <div className={ classes.invoiceSubTitleContainer }>
                                            <span style={{ marginLeft: '20px' }}>Ev#ABCDE</span>
                                        </div>
                                        <div className={ classes.invoiceDetailContainer }>
                                            <span style={{ marginLeft: '20px' }}>Catering services...</span>
                                        </div>
                                    </div>
                                    <div className={ classes.columnDate }>
                                        <span style={{ marginLeft: '20px' }}>To be paid 21th Feb</span>
                                    </div>
                                    <div className={ classes.columnAmount }>
                                        $500
                                    </div>
                                    <div className={ classes.columnView }>
                                        <img src="/assets/img/eye.png" />
                                    </div>
                                    <div className={ classes.columnActions }>
                                            Approve
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

export default withStyles(payPageStyle)(PayPage);