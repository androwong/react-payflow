import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import databaseDumpPageStyle from './databaseDumpPageStyle';
import { NavLink } from 'react-router-dom';

class DatabaseDumpPage extends Component
{
    render(){

        const { classes } = this.props;

        return(
            <div>
                <div className={ classes.dumpContainer }>
                    <div className={ classes.componentHeader }>
                        Full Database Dump
                    </div>
                    <div className={ classes.componentContent }>
                        <img src="/assets/img/xlsx-icon.png" />
                        <NavLink to="#" className={ classes.btnDownload } >
                            Download
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(databaseDumpPageStyle)(DatabaseDumpPage);