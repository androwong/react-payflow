import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage';
import SignUpPage from 'views/SignUpPage/SignUpPage';
import SetupPage from 'views/SetupPage';
import RaiseInvoicePage from 'views/RaiseInvoicePage';
import TrackPaymentPage from 'views/TrackPaymentPage';
import BuyRequestPage from 'views/BuyRequestPage';
import ReviewInvoicesPage from 'views/ReviewInvoicesPage';
import TrackPerformancePage from 'views/TrackPerformancePage';
import AdminSetupPage from 'views/Admin/SetupPage';
import ApprovePage from 'views/Admin/ApprovePage';
import TrackPage from 'views/Admin/TrackPage';
import PayPage from 'views/Admin/PayPage';
import ReportPage from 'views/Admin/ReportPage/ReportPage';

const hist = createBrowserHistory();

class App extends Component {

  state = {
  }

  render() {
    return (
      <Router history={hist}>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={SignUpPage} />
            <Route path="/setup" component={SetupPage} />
            <Route path="/raise-invoice" component={RaiseInvoicePage} />
            <Route path="/track-payment" component={TrackPaymentPage} />
            <Route path="/buy-request" component={BuyRequestPage} />
            <Route path="/review-invoices" component={ReviewInvoicesPage} />
            <Route path="/track-performance" component={TrackPerformancePage} />
            <Route path="/admin-setup" component={AdminSetupPage} />
            <Route path="/approve" component={ApprovePage} />
            <Route path="/track" component={TrackPage} />
            <Route path="/pay" component={PayPage} />
            <Route path="/report" component={ReportPage} />
          </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;
