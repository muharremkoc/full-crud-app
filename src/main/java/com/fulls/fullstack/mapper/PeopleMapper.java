package com.fulls.fullstack.mapper;

import com.fulls.fullstack.dto.PeopleDTO;
import com.fulls.fullstack.model.People;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper
public interface PeopleMapper {


    @Mappings({
            @Mapping(target = "firstName",source = "firstName"),
            @Mapping(target = "lastName",source = "lastName"),
            @Mapping(target = "email",source = "email")
    })

    People peopleDTOtoPeople(PeopleDTO peopleDTO);
}
