import React, { Component } from 'react'

import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import Button from 'components/Button/index.jsx';

import { withStyles } from '@material-ui/core';
import setupPageStyle from './setupPageStyle';
class NewUserPage extends Component
{
    render(){
        const { classes } = this.props;
        return(
            <div>
            <GridContainer spacing={40}>
                <GridItem xs={4}>
                    <GridContainer>
                        <GridItem xs={12} className={ classes.inputLabel }>
                            Full name
                        </GridItem>
                        <GridItem xs={12}>
                            <BaseInput className={ classes.input }  />
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={4}>
                    <GridContainer>
                        <GridItem xs={12} className={ classes.inputLabel }>
                            Email
                        </GridItem>
                        <GridItem xs={12}>
                            <BaseInput className={ classes.input }  />
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={4}>
                    <GridContainer>
                        <GridItem xs={12} className={ classes.inputLabel }>
                            Phone
                        </GridItem>
                        <GridItem xs={12}>
                            <BaseInput className={ classes.input }  />
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
            <GridContainer spacing={40}>
                <GridItem xs={8}>
                    <GridContainer>
                        <GridItem xs={12} className={ classes.inputLabel }>
                            Organization
                        </GridItem>
                        <GridItem xs={12}>
                            <BaseInput className={ classes.input }  />
                        </GridItem>
                    </GridContainer>
                </GridItem>
                <GridItem xs={4}>
                    <GridContainer>
                        <GridItem xs={12} className={ classes.inputLabel }>
                            Phone
                        </GridItem>
                        <GridItem xs={12}>
                            <BaseInput className={ classes.input } />
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
            <GridContainer spacing={40}>
                <GridItem xs={12}>
                    <GridContainer>
                        <GridItem xs={12} className={ classes.inputLabel }>
                            Approval Budget if buyer
                        </GridItem>
                        <GridItem xs={12}>
                            <BaseInput className={ classes.input }  />
                        </GridItem>
                    </GridContainer>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} className={ classes.submitContainer }>
                    <Button className={ `${classes.btnSubmit}` }>
                        Submit
                    </Button>
                </GridItem>
            </GridContainer>
            </div>
        )
    }
}

export default withStyles(setupPageStyle)(NewUserPage);