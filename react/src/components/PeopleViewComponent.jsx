import React, { Component } from 'react';
import PeopleService from '../services/PeopleService';

class PeopleViewComponent extends Component {

    constructor(props){
        super(props)

        this.state={
           peoID: this.props.match.params.peoID,
           people: {}
        }
    }
    componentDidMount(){
        PeopleService.getPeopleById(this.state.peoID).then( res => {
            this.setState({people: res.data});
        })
    }

    cancel(){
        this.props.history.push('/people');
    }


    render() {
        return (
            <div>
            <br></br>
            <div className = "card col-md-6 offset-md-3">
                <h3 className = "text-center"> View People Details</h3>
                <div className = "card-body">
                    <div className = "row">
                        <label>  First Name: </label>
                        <div> { this.state.people.firstName }</div>
                    </div>
                    <div className = "row">
                        <label>  Last Name: </label>
                        <div> { this.state.people.lastName }</div>
                    </div>
                    <div className = "row">
                        <label> Email: </label>
                        <div> { this.state.people.email }</div>
                    </div>
                    <button className="btn btn-info" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Get All People</button>
                </div>


            </div>
        </div>
        );
    }
}

export default PeopleViewComponent;