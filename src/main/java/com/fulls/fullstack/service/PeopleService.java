package com.fulls.fullstack.service;

import com.fulls.fullstack.dto.PeopleDTO;
import com.fulls.fullstack.model.People;

import java.util.List;

public interface PeopleService {

    People createPeople(PeopleDTO peopleDTO);
    People updatePeople( long peoID,PeopleDTO peopleDTO);
    People getPeople(long peoID);
    List<People> listPeople();
    void deletePeople(long peoID);

}
