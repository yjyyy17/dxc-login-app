package com.dxc.springbootbackend.controller;

import com.dxc.springbootbackend.model.Role;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/role")
public class RoleController {

    @GetMapping("/get-roles")
    public Role[] getRoles() {
        return Role.values();
    }
}