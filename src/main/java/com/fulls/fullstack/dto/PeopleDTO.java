package com.fulls.fullstack.dto;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.Email;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PeopleDTO {

    String firstName;

    String lastName;

    @Email
    String email;
}
