import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import accountReconciliationPageStyle from './accountReconciliationPageStyle';
import WhiteHeader from 'components/WhiteHeader/index.jsx';
import SideNavButton from 'components/SideNavButton/index.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import CheckBox from 'components/CustomCheckBox/index.jsx';
import Button from 'components/Button/index.jsx';
import Footer from 'components/Footer/index.jsx';

import { NavLink, Router, Route, Switch } from 'react-router-dom';


class AccountReconciliationPage extends Component
{
    render(){
        const { classes } = this.props;

        return(
            <div>
                <div className={ classes.tableTitle }>
                    Reconciled items
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
                            <div className={ classes.companyContainer }>
                                <span style={{ marginLeft: '20px' }}>RED bird llc</span>
                            </div>
                        </div>
                        <div className={ classes.columnDate }>
                            <span style={{ marginLeft: '20px' }}>To be paid 21th Feb</span>
                        </div>
                        <div className={ classes.columnAmount }>
                            $500
                        </div>
                    </div>
                </div>
                <div className={ classes.spacer }></div>
                <div className={ classes.tableTitle }>
                    Open items
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
                    </div>
                    <div className={ classes.category }>
                        Buyer requested, not invoiced
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
                            <div className={ classes.companyContainer }>
                                <span style={{ marginLeft: '20px' }}>RED bird llc</span>
                            </div>
                        </div>
                        <div className={ classes.columnDate }>
                            To be paid 21th Feb
                        </div>
                        <div className={ classes.columnAmount }>
                            $500
                        </div>
                    </div>
                    <div className={ classes.spacer40 }></div>
                    <div className={ classes.category }>
                        Invoice raised, can not pay
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
                            <div className={ classes.companyContainer }>
                                <span style={{ marginLeft: '20px' }}>RED bird llc</span>
                            </div>
                        </div>
                        <div className={ classes.columnDate }>
                            To be paid 21th Feb
                        </div>
                        <div className={ classes.columnAmount }>
                            $500
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(accountReconciliationPageStyle)(AccountReconciliationPage));