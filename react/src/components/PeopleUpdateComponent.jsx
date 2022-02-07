import React, { Component } from 'react';
import PeopleService from '../services/PeopleService';

class PeopleUpdateComponent extends Component {

     constructor(props){
         super(props)

         this.state={
            peoID: this.props.match.params.peoID,
            firstName: '',
            lastName: '',
            email: ''
         }
         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
         this.updatePeople = this.updatePeople.bind(this);
     }

     componentDidMount(){
        PeopleService.getPeopleById(this.state.peoID).then( (res) =>{
            let people = res.data;
            this.setState({firstName: people.firstName,
                lastName: people.lastName,
                email : people.email
            });
            console.log('people => ' + JSON.stringify(people));
            console.log('peoID => ' + JSON.stringify(this.state.peoID));
        });
    }

    updatePeople = (e) => {
        e.preventDefault();
        let peopleDto = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        console.log('people => ' + JSON.stringify(peopleDto));
        console.log('peoID => ' + JSON.stringify(this.state.peoID));
        PeopleService.updatePeople(peopleDto, this.state.peoID).then( res => {
            this.props.history.push('/people');
        });
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/people');
    }


    render() {
        return (
           <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update People</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updatePeople}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}

export default PeopleUpdateComponent;