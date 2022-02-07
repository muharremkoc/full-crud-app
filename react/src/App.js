import logo from './logo.svg';
import './App.css';
import PeopleListComponent from './components/PeopleListComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import PeopleCreateComponent from './components/PeopleCreateComponent';
import PeopleUpdateComponent from './components/PeopleUpdateComponent';
import PeopleViewComponent from './components/PeopleViewComponent';
function App() {
  return (
 <div>
   <Router>
   <HeaderComponent/>
 
   <div className="container">
        <Switch>
        <Route path = "/" exact component = {PeopleListComponent}></Route>
         <Route path = "/people" component = {PeopleListComponent}></Route>
         <Route path = "/add-people" component = {PeopleCreateComponent}></Route>
         <Route path = "/update-people/:peoID" component = {PeopleUpdateComponent}></Route>
         <Route path = "/view-people/:peoID" component = {PeopleViewComponent}></Route>
     </Switch>
     </div>
    <FooterComponent/>
    </Router>
 </div>
  );
}

export default App;
