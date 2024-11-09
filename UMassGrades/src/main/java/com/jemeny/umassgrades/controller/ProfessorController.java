package com.jemeny.umassgrades.controller;

import com.jemeny.umassgrades.model.ProfessorEntity;
import com.jemeny.umassgrades.service.ProfessorService;
import com.jemeny.umassgrades.model.ProfessorEntity;
import com.jemeny.umassgrades.service.ProfessorService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("/api/professors")
public class ProfessorController {

    private final ProfessorService professorService;

    public ProfessorController(ProfessorService professorService) {
        this.professorService = professorService;
    }

    @GetMapping
    public List<ProfessorEntity> getAllProfessors() {
        return professorService.getAllProfessors();
    }

    @GetMapping("/{id}")
    public ProfessorEntity getProfessorById(@PathVariable Long id) {
        return professorService.getProfessorById(id);
    }
}
