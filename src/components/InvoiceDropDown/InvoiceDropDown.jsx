import React, {Component} from 'react'
import { withStyles } from '@material-ui/core';
import invoiceDropDownStyle from './invoiceDropDownStyle.jsx';
class InvoiceDropDown extends Component
{

    state = {
        isCollapsed: true,
    }

    handleClickHeader = () => {
        this.setState({isCollapsed: !this.state.isCollapsed});
    }

    renderInvoices = () => {
        if(!this.state.isCollapsed)
            return null;
        const { classes } = this.props;
        return (
            <div className={ classes.invoices }>
               <div className={ classes.invoiceContainer }>
                    <div className={ classes.invoiceNumberContainer }>
                        Inv#12345
                    </div>
                    <div className={ classes.invoiceSubNumberContainer }>
                        Ev#ABCDE
                    </div>
                    <div className={ classes.invoiceTitle }>
                        Catering services….
                    </div>
                    <div className={ classes.invoiceAmount }>
                        $500
                    </div>
                    <div className={ classes.invoiceRequestor }>
                        Requested Katy Walsh
                    </div>
                    <div className={ classes.invoiceDate }>
                        Feb 9, 2019
                    </div>
               </div> 
               <div className={ classes.invoiceContainer }>
                    <div className={ classes.invoiceNumberContainer }>
                        Inv#12345
                    </div>
                    <div className={ classes.invoiceSubNumberContainer }>
                        Ev#ABCDE
                    </div>
                    <div className={ classes.invoiceTitle }>
                        Catering services….
                    </div>
                    <div className={ classes.invoiceAmount }>
                        $500
                    </div>
                    <div className={ classes.invoiceRequestor }>
                        Requested Katy Walsh
                    </div>
                    <div className={ classes.invoiceDate }>
                        Feb 9, 2019
                    </div>
               </div> 
               <div className={ classes.invoiceContainer }>
                    <div className={ classes.invoiceNumberContainer }>
                        Inv#12345
                    </div>
                    <div className={ classes.invoiceSubNumberContainer }>
                        Ev#ABCDE
                    </div>
                    <div className={ classes.invoiceTitle }>
                        Catering services….
                    </div>
                    <div className={ classes.invoiceAmount }>
                        $500
                    </div>
                    <div className={ classes.invoiceRequestor }>
                        Requested Katy Walsh
                    </div>
                    <div className={ classes.invoiceDate }>
                        Feb 9, 2019
                    </div>
               </div> 
               <div className={ classes.invoiceContainer }>
                    <div className={ classes.invoiceNumberContainer }>
                        Inv#12345
                    </div>
                    <div className={ classes.invoiceSubNumberContainer }>
                        Ev#ABCDE
                    </div>
                    <div className={ classes.invoiceTitle }>
                        Catering services….
                    </div>
                    <div className={ classes.invoiceAmount }>
                        $500
                    </div>
                    <div className={ classes.invoiceRequestor }>
                        Requested Katy Walsh
                    </div>
                    <div className={ classes.invoiceDate }>
                        Feb 9, 2019
                    </div>
               </div> 
            </div>
        ) 
    }

    render(){

        const {classes, iconUrl, category} = this.props;
        const {isCollapsed} = this.state;
        let dropDownIconClasses = "";
        if(isCollapsed == true)
            dropDownIconClasses = classes.dropDownIcon + " " + classes.iconTransform;
        else
            dropDownIconClasses = classes.dropDownIcon;
        return(
            <div className={classes.dropDownContainer}>
                <div className={ classes.header } onClick={this.handleClickHeader}>
                    <img src={ iconUrl } className={ classes.iconImage} />
                    <div>
                        { category }
                    </div>
                    <img src="/assets/img/dropdown-icon.png" className={ dropDownIconClasses }/>
                </div>
                { this.renderInvoices() }
           </div>
        )
    }
}

export default withStyles(invoiceDropDownStyle)(InvoiceDropDown);