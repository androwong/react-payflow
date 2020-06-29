import React, { Component } from 'react'
import setupPageStyle from './setupPageStyle'
import { withStyles } from '@material-ui/core';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import BaseInput from 'components/BaseInput';
import Button from 'components/Button';

class EventForm extends Component
{
    render(){

        const { classes } = this.props;

        return(
            <div className={ classes.subFormContainer }>
                <GridContainer>
                    <GridItem xs={12} className={ classes.subFormTitle }>
                        Event
                    </GridItem>
                </GridContainer>
                <GridContainer spacing={40}>
                    <GridItem xs={4}>
                        <GridContainer>
                            <GridItem xs={12} className={ classes.inputLabel }>
                                Event ID, name
                            </GridItem>
                            <GridItem xs={12}>
                                <BaseInput className={ classes.input }  />
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                    <GridItem xs={4}>
                        <GridContainer>
                            <GridItem xs={12} className={ classes.inputLabel }>
                                Short Description
                            </GridItem>
                            <GridItem xs={12}>
                                <BaseInput className={ classes.input }  />
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                    <GridItem xs={4}>
                        <GridContainer>
                            <GridItem xs={12} className={ classes.inputLabel }>
                                Budget value
                            </GridItem>
                            <GridItem xs={12}>
                                <BaseInput className={ classes.input }  />
                            </GridItem>
                        </GridContainer>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} className={ classes.marginVertical_40 }>
                        <Button className={ `${classes.btnSubmit}` }>
                            Submit
                        </Button>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(setupPageStyle)(EventForm);