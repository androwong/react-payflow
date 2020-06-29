import React, { Component } from 'react'
import setupPageStyle from './setupPageStyle'
import { withStyles } from '@material-ui/core';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import BaseInput from 'components/BaseInput';
import Button from 'components/Button';
import EventForm from './EventForm';
import CategoryForm from './CategoryForm';
import RequestorForm from './RequestorForm';

class BudgetsPage extends Component
{
    render(){

        const { classes } = this.props;

        return(
            <div>
                <EventForm />
                <CategoryForm />
                <RequestorForm />
            </div>
        )
    }
}

export default withStyles(setupPageStyle)(BudgetsPage);