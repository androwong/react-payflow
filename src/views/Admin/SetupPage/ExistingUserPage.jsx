import React, { Component } from 'react'

import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import BaseInput from 'components/BaseInput/index.jsx';
import Button from 'components/Button/index.jsx';

import { withStyles } from '@material-ui/core';
import existingUserPageStyle from './existingUserPageStyle.jsx';

class ExistingUserPage extends Component
{

    render(){
        const { classes } = this.props;
        return(
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
                    <div className={ classes.columnView }>
                        <img src="/assets/img/eye.png" />
                    </div>
                    <div className={ classes.columnActions }>
                        <div className={ classes.suspendContainer }>
                            Suspend
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
                    <div className={ classes.columnView }>
                        <img src="/assets/img/eye.png" />
                    </div>
                    <div className={ classes.columnActions }>
                        <div className={ classes.suspendContainer }>
                            Suspend
                        </div>
                        <div className={ classes.deleteContainer }>
                            Delete
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default withStyles(existingUserPageStyle)(ExistingUserPage);