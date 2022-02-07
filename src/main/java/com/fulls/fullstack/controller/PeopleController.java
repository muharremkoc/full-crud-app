package com.fulls.fullstack.controller;

import com.fulls.fullstack.dto.PeopleDTO;
import com.fulls.fullstack.model.People;
import com.fulls.fullstack.service.PeopleService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PeopleController {

    final PeopleService peopleService;



    @PostMapping("/people")
    public People createPeople(@RequestBody PeopleDTO peopleDTO){
        return peopleService.createPeople(peopleDTO);
    }

    @GetMapping("/people")
    public List<People> listPeople(){
        return peopleService.listPeople();
    }

    @GetMapping("/people/{peoID}")
    public ResponseEntity<People> getEmployeeById(@PathVariable("peoID") long peoID) {

        return ResponseEntity.ok(peopleService.getPeople(peoID));
    }

    @PutMapping("/people/{peoID}")
    public ResponseEntity<People> updatePeople(@PathVariable("peoID") long peoID, @RequestBody PeopleDTO peopleDTO){
        return ResponseEntity.ok(peopleService.updatePeople(peoID,peopleDTO));
    }
    @DeleteMapping("/people/{peoID}")
    public ResponseEntity<Map<String, Boolean>> deletePeople(@PathVariable("peoID") long peoID){
         peopleService.deletePeople(peoID);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }



}
