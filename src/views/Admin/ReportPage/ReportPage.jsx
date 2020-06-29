import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import reportPageStyle from './reportPageStyle.jsx';
import WhiteHeader from 'components/WhiteHeader/index.jsx';
import SideNavButton from 'components/SideNavButton/index.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import CheckBox from 'components/CustomCheckBox/index.jsx';
import Button from 'components/Button/index.jsx';
import Footer from 'components/Footer/index.jsx';

import { NavLink, Router, Route, Switch } from 'react-router-dom';
import BankReconciliationPage from './BankReconciliationPage.jsx';
import AccountReconciliationPage from './AccountReconciliationPage.jsx';
import BudgetsPage from './BudgetsPage.jsx';
import DatabaseDumpPage from './DatabaseDumpPage.jsx';


class ReportPage extends Component
{
    render(){
        const { classes, match } = this.props;

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
                            <div className={ classes.tabContainer }>
                                <div className={ classes.tabLeftWrapper }>
                                    <span className={ classes.user }>Payments</span>
                                    <NavLink to="/report" className={ classes.inactiveNav } activeClassName={ classes.activeNav } exact>
                                        Bank Reconciliation
                                    </NavLink>
                                    <NavLink to="/report/account-reconciliation" className={ classes.inactiveNav } activeClassName={ classes.activeNav }>
                                        Account Reconciliation
                                    </NavLink>
                                </div>
                                <NavLink to="/report/budgets" className={ classes.inactiveBudgetNav } activeClassName={ classes.activeGeyNav }>
                                    Budgets
                                </NavLink>

                                <NavLink to="/report/database-dump" className={ classes.btnDatabaseDump }>
                                    Full Database Dump
                                </NavLink>
                            </div>
                            <div>
                                <Switch>
                                    <Route path="/report" component={BankReconciliationPage} exact />
                                    <Route path="/report/account-reconciliation" component={AccountReconciliationPage} />
                                    <Route path="/report/budgets" component={BudgetsPage} />
                                    <Route path="/report/database-dump" component={DatabaseDumpPage} />
                                </Switch>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(reportPageStyle)(ReportPage));