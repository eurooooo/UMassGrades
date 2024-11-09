package com.jemeny.umassgrades.service;

import com.jemeny.umassgrades.model.ClassEntity;
import com.jemeny.umassgrades.model.ProfessorEntity;
import jakarta.annotation.PostConstruct;
import net.datafaker.Faker;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class ClassService {

    private final List<ClassEntity> classes = new ArrayList<>();
    private final Faker faker = new Faker();
    private final Random random = new Random();

    @PostConstruct
    public void initializeDummyData() {
        List<ProfessorEntity> professors = new ArrayList<>();
        for (int i = 1; i <= 100; i++) {
            professors.add(new ProfessorEntity((long) i + 1, faker.name().fullName(), faker.number().randomDouble(2, 1, 5), faker.number().randomDouble(2, 1, 5), faker.internet().url()));
        }

        for (int i = 1; i <= 150; i++) {
            String className = faker.educator().course() + " " + (100 + i);
            List<ProfessorEntity> assignedProfessors = getRandomProfessors(professors);
            List<Integer> grades = generateRandomGrades(50);

            classes.add(new ClassEntity((long) i, className, assignedProfessors, grades));
        }
    }

    public List<ClassEntity> getAllClasses() {
        return classes;
    }

    public ClassEntity getClassById(Long id) {
        return classes.stream().filter(c -> c.getId().equals(id)).findFirst().orElse(null);
    }

    private List<ProfessorEntity> getRandomProfessors(List<ProfessorEntity> professors) {
        int numberOfProfessors = random.nextInt(3) + 1;
        List<ProfessorEntity> assignedProfessors = new ArrayList<>();
        for (int i = 0; i < numberOfProfessors; i++) {
            assignedProfessors.add(professors.get(random.nextInt(professors.size())));
        }
        return assignedProfessors;
    }

    private List<Integer> generateRandomGrades(int numGrades) {
        return random.ints(numGrades, 50, 100).boxed().collect(Collectors.toList());
    }

    public Map<String, Long> getGradeDistribution(List<Integer> grades) {
        return grades.stream()
                .collect(Collectors.groupingBy(
                        grade -> {
                            if (grade >= 90) return "A";
                            else if (grade >= 80) return "B";
                            else if (grade >= 70) return "C";
                            else if (grade >= 60) return "D";
                            else return "F";
                        },
                        Collectors.counting()
                ));
    }
}
