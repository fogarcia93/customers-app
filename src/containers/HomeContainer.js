import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AppFrame from "./../components/AppFrame";
import CustomersActions from "./../components/CustomersActions";

class HomeContainer extends Component {

    handleOnClick = () =>{
        console.log("handleOnClick")
        this.props.history.push('/customers');
    }
  render() {
    return (
      <div>
        <AppFrame
          header="Inicio"
          body={
            <div>
                  <img src="https://i.udemycdn.com/course/750x422/1374394_f1a8_2.jpg" alt=""/>              <CustomersActions>
                  <button onClick={this.handleOnClick}>Listado de Clientes</button>
              </CustomersActions>
            </div>
          }
        />
      </div>
    );
  }
}

export default withRouter(HomeContainer);
