package com.fulls.fullstack.repository;

import com.fulls.fullstack.model.People;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PeopleRepository extends JpaRepository<People,Long> {

    People findByEmail(String email);
}
