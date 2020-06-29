import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core';
import setupPageStyle from './setupPageStyle.jsx';
import WhiteHeader from 'components/WhiteHeader/index.jsx';
import SideNavButton from 'components/SideNavButton/index.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import CheckBox from 'components/CustomCheckBox/index.jsx';
import Button from 'components/Button/index.jsx';
import Footer from 'components/Footer/index.jsx';

import { NavLink, Router, Route, Switch } from 'react-router-dom';
import NewUserPage from './NewUserPage.jsx';
import ExistingUserPage from './ExistingUserPage.jsx'
import BudgetsPage from './BudgetsPage.jsx';

class SetupPage extends Component
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
                                    <span className={ classes.user }>User</span>
                                    <NavLink to="/admin-setup" className={ classes.inactiveNav } activeClassName={ classes.activeNav } exact>
                                        New User
                                    </NavLink>
                                    <NavLink to="/admin-setup/existing-user" className={ classes.inactiveNav } activeClassName={ classes.activeNav }>
                                        Existing User
                                    </NavLink>
                                </div>
                                <NavLink to="/admin-setup/budgets" className={ classes.inactiveNav } activeClassName={ classes.activeGeyNav }>
                                    Budgets
                                </NavLink>
                            </div>
                            <div>
                                <Switch>
                                    <Route path="/admin-setup" component={NewUserPage} exact />
                                    <Route path="/admin-setup/existing-user" component={ExistingUserPage} />
                                    <Route path="/admin-setup/budgets" component={BudgetsPage} />
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(setupPageStyle)(SetupPage));