package com.jemeny.umassgrades.service;

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
            ProfessorEntity professor = new ProfessorEntity((long) i + 1,faker.name().fullName(),faker.number().randomDouble(2, 1, 5),faker.number().randomDouble(2, 1, 5), faker.internet().url());
            professors.add(professor);
        }
    }

    public List<ProfessorEntity> getAllProfessors() {
        return professors;
    }

    public ProfessorEntity getProfessorById(Long id) {
        return professors.stream()
                .filter(prof -> prof.id().equals(id))
                .findFirst()
                .orElse(null);
    }
}
