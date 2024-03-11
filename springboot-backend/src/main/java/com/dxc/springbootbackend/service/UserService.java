package com.dxc.springbootbackend.service;

import com.dxc.springbootbackend.dto.UserDto;
import com.dxc.springbootbackend.model.User;
import com.dxc.springbootbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

@Service
@Validated
public class UserService {

    @Autowired
    UserRepository userRepository;

    public ResponseEntity<Object> addUser(UserDto userDto) {
        if (userRepository.existsByUsername(userDto.getUsername())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with the same username already exists.");
        }
        try {

            User user = new User(userDto.getUsername(), userDto.getPassword(), userDto.getName(), userDto.getRole());
            User newUser = userRepository.save(user);
            return ResponseEntity.ok(newUser);
        } catch (Exception e) {
            System.out.println("Error is: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add user due to a database error");
        }
    }

    public boolean validateUser(String userName, String password) {
        User user = userRepository.findByUsername(userName);
        if (user == null) {
            return false;
        }
        return password.equals(user.getPassword());
    }

    public User getUserByUsername(String username)  {
        return userRepository.findByUsername(username);
    }

}