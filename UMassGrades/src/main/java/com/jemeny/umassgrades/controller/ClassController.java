
package com.jemeny.umassgrades.controller;

import com.jemeny.umassgrades.model.ClassEntity;
import com.jemeny.umassgrades.service.ClassService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/classes")
public class ClassController {

    private final ClassService classService;

    public ClassController(ClassService classService) {
        this.classService = classService;
    }

    @GetMapping
    public Iterable<ClassEntity> getAllClasses() {
        return classService.getAllClasses();
    }
}