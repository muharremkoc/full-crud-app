package com.fulls.fullstack.exception;

import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ResourceNotFoundException extends RuntimeException{

    static final  long serialVersionUID=1L;

    public ResourceNotFoundException(String message){
        super(message);
    }
}
