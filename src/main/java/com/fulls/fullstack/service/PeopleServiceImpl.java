package com.fulls.fullstack.service;

import com.fulls.fullstack.dto.PeopleDTO;
import com.fulls.fullstack.exception.ResourceNotFoundException;
import com.fulls.fullstack.mapper.PeopleMapper;
import com.fulls.fullstack.model.People;
import com.fulls.fullstack.repository.PeopleRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PeopleServiceImpl implements PeopleService {

    final PeopleRepository peopleRepository;
    final PeopleMapper peopleMapper;

    @Override
    public People createPeople(PeopleDTO peopleDTO) {

        People people = peopleMapper.peopleDTOtoPeople(peopleDTO);

        return peopleRepository.save(people);
    }

    @Override
    public People updatePeople(long peoID,PeopleDTO peopleDTO) {

        People newPeople = peopleRepository.findById(peoID).orElseThrow(() -> new ResourceNotFoundException("People not exist with:" + peoID));

        newPeople.setFirstName(peopleDTO.getFirstName());
        newPeople.setLastName(peopleDTO.getLastName());
        newPeople.setEmail(peopleDTO.getEmail());

        return peopleRepository.save(newPeople);
    }

    @Override
    public People getPeople(long peoID) {


        return peopleRepository.findById(peoID).orElseThrow(() -> new ResourceNotFoundException("People not exist with:" + peoID));
    }

    @Override
    public List<People> listPeople() {
        return peopleRepository.findAll();
    }

    @Override
    public void deletePeople(long peoID) {
        try {
            peopleRepository.deleteById(peoID);
        }catch (ResourceNotFoundException exception){
            exception=new ResourceNotFoundException("People not exist with:" + peoID);
            log.error(exception.getMessage());
        }
    }
}
