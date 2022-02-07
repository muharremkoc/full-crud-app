import React, { Component } from 'react';
import PeopleService from '../services/PeopleService';

class PeopleCreateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
         
            firstName: '',
            lastName: '',
            email: ''
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.savePeople=this.savePeople.bind(this);
       
    }
   
    savePeople = (e)=>{
        e.preventDefault();
        let peopleDto = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email};
        console.log('people => ' + JSON.stringify(peopleDto));

        PeopleService.createPeople(peopleDto).then(res=>{
            this.props.history.push('/people')
        })
        
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
                <div className='container'>
                <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                  <h3 className='text-center'>Add People</h3>
                    <div className='card-body'>
                        <form>
                            <div className='form-group'>
                                <label>First Name</label>
                                <input placeholder='First Name' name='firstName' className='form-control'
                                 value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                <label>Last Name</label>
                                <input placeholder='Last Name' name='lastName' className='form-control'
                                 value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                     <label>Email</label>
                                <input placeholder='Email' name='email' className='form-control'
                                 value={this.state.email} onChange={this.changeEmailHandler}/>
                            </div>
                            <button className="btn btn-success" onClick={this.savePeople}>Save</button>
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

export default PeopleCreateComponent;