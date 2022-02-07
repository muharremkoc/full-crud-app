package com.fulls.fullstack.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Builder
@Entity
@Table(name = "people")
@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class People {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long peoID;

    String firstName;

    String lastName;

    @Email
    String email;

}
