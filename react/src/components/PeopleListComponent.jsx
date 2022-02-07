import React, { Component } from 'react';
import PeopleService from '../services/PeopleService';

class PeopleListComponent extends Component {
     constructor(props){
         super(props)

         this.state={
            
            peoplee: []

             
         }
         this.addPeople = this.addPeople.bind(this);
         this.editPeople=this.editPeople.bind(this);
         this.deletePeople=this.deletePeople.bind(this);
     }

    
     componentDidMount(){
        PeopleService.getPeoples().then((res) => {
            console.log(res);
            this.setState({ peoplee: res.data});
        });
    }

    viewPeople(peoID){
        this.props.history.push(`/view-people/${peoID}`);
    }

    addPeople(){
        this.props.history.push('/add-people');
    }

    editPeople(peoID){
        this.props.history.push(`/update-people/${peoID}`);
    }
    deletePeople(peoID){
        PeopleService.deletePeople(peoID).then( res => {
            this.setState({peoplee: this.state.peoplee.filter(people => people.peoID !== peoID)});
            console.log("People has been deleted")
        });
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>People List</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPeople}> Add People</button>
                 </div>
                 <br></br>
                <div className='row'>
                <table className = "table table-striped table-bordered">

<thead>
    <tr>
        <th>  First Name</th>
        <th>  Last Name</th>
        <th> Email </th>
        <th> Actions</th>
    </tr>
</thead>
<tbody>
    {
        this.state.peoplee.map(
            people => 
            <tr key = {people.peoID}>
                 <td> { people.firstName} </td>   
                 <td> {people.lastName}</td>
                 <td> {people.email}</td>
                 <td>
                    <button onClick={ () => this.editPeople(people.peoID)} className="btn btn-info">Update </button>
                    <button  style={{marginLeft: "10px"}} onClick={ () => this.deletePeople(people.peoID)} className="btn btn-danger">Delete </button>
                    <button  style={{marginLeft: "10px"}} onClick={ () => this.viewPeople(people.peoID)} className="btn btn-dark">View </button>
                </td>
            </tr>
        )
    }
</tbody>
</table>
                </div>

            </div>
        );
    }
}

export default PeopleListComponent;

    
