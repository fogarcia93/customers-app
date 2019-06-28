import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomerEdit from './../components/CustomerEdit';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewCustomerContainer extends Component {

    handleSubmit = ()=>{

    }

    handleSubmitSuccess = () =>{

    }

    handleOnBack = ()=>{
        this.props.history.goBack();
    }
    
    renderBody = () =>{
        const newCustomer ={
            "id": "",
            "dni":"",
            "name":"",
            "age": 0
        }

        return <CustomerEdit {...newCustomer} onSubmit={this.handleSubmit} 
                             onSubmitSuccess={this.handleSubmitSuccess}
                             onBack={this.handleOnBack}
                             />
    }
    render() {
        return (
            <div>
                <AppFrame header={`Creacion de nuevo cliente`}
                body={this.renderBody()}
                ></AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {

};

export default withRouter(connect(null, null)(NewCustomerContainer));