package com.dxc.springbootbackend.controller;

import com.dxc.springbootbackend.dto.LoginDto;
import com.dxc.springbootbackend.dto.UserDto;
import com.dxc.springbootbackend.model.User;
import com.dxc.springbootbackend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/user")

public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/add-user")
    public ResponseEntity<Object> addUser( @RequestBody UserDto userDto){
        try{
            return ResponseEntity.ok().body(userService.addUser(userDto));
        } catch (Exception e){
            return ResponseEntity.internalServerError().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<Object> loginUser(@RequestBody LoginDto loginDto) {
        boolean isValid = userService.validateUser(loginDto.getUsername(), loginDto.getPassword());
        if (isValid) {
            User user = userService.getUserByUsername(loginDto.getUsername());
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

}
