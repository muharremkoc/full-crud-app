import axios from 'axios'



const PEOPLE_BASE_API_URL='http://localhost:1312/api/v1/people';
class PeopleService{

    getPeoples(){
        return axios.get(PEOPLE_BASE_API_URL);
    }

    createPeople(peopleDto){
        return axios.post(PEOPLE_BASE_API_URL,peopleDto);
    }

    getPeopleById(peoID){
        
        return axios.get(PEOPLE_BASE_API_URL + '/' + peoID);
    }
    updatePeople(peopleDto, peoID){
        return axios.put(PEOPLE_BASE_API_URL + '/' + peoID, peopleDto);
    }

    deletePeople(peoID){
        
        return axios.delete(PEOPLE_BASE_API_URL + '/' + peoID );
    }

}
export default new PeopleService()