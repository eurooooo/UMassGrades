package com.jemeny.umassgrades.service;

import com.jemeny.umassgrades.model.GradeEntity;
import com.jemeny.umassgrades.model.ProfessorEntity;
import jakarta.annotation.PostConstruct;

import net.datafaker.Faker;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class ProfessorService {

    private final List<ProfessorEntity> professors = new ArrayList<>();
    private final Faker faker = new Faker();

    @PostConstruct
    public void initializeFakeData() {
        for (int i = 0; i < 200; i++) {
            List<GradeEntity> grades = new ArrayList<>();
            grades.add(new GradeEntity("A", 5));
            grades.add(new GradeEntity("A-", 4));
            grades.add(new GradeEntity("B+", 3));
            grades.add(new GradeEntity("B", 3));
            grades.add(new GradeEntity("B-", 2));
            grades.add(new GradeEntity("C+", 3));
            grades.add(new GradeEntity("C", 2));
            grades.add(new GradeEntity("C-", 1));
            grades.add(new GradeEntity("D+", 0));
            grades.add(new GradeEntity("D", 0));
            grades.add(new GradeEntity("F", 1));
            ProfessorEntity professor = new ProfessorEntity((long) i + 1,faker.name().fullName(),grades);
            professors.add(professor);
        }
    }

    public List<ProfessorEntity> getAllProfessors() {
        return professors;
    }

    public ProfessorEntity getProfessorById(Long id) {
        return professors.stream()
                .filter(prof -> prof.profId().equals(id))
                .findFirst()
                .orElse(null);
    }
}
