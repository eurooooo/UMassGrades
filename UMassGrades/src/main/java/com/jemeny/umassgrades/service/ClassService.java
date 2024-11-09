
package com.jemeny.umassgrades.service;

import com.jemeny.umassgrades.model.ClassEntity;
import com.jemeny.umassgrades.model.ProfessorEntity;
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
        // Generate a list of professors
        List<ProfessorEntity> professors = new ArrayList<>();
        for (int i = 1; i <= 100; i++) {
            professors.add(new ProfessorEntity((long) i + 1,faker.name().fullName(),faker.number().randomDouble(2, 1, 5),faker.number().randomDouble(2, 1, 5), faker.internet().url()));
        }

        // Generate a list of classes with randomly assigned professors
        for (int i = 1; i <= 150; i++) {
            String className = faker.educator().course() + " " + (100 + i); // Example: "Biology 101"
            List<ProfessorEntity> assignedProfessors = getRandomProfessors(professors);
            List<Integer> grades = generateRandomGrades(50); // Generate random grades for 50 students

            classes.add(new ClassEntity((long) i, className, assignedProfessors, grades));
        }

        // Debugging: Print the populated classes list
        System.out.println("Classes initialized: " + classes);
    }

    public List<ClassEntity> getAllClasses() {
        return classes;
    }
    public ClassEntity getClassById(Long id) {
        return classes.stream().filter(c -> c.id().equals(id)).findFirst().orElse(null);
    }

    // Helper method to assign a random subset of professors to a class
    private List<ProfessorEntity> getRandomProfessors(List<ProfessorEntity> professors) {
        int numberOfProfessors = random.nextInt(3) + 1; // Assign between 1 and 3 professors per class
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

    // Calculate mean
    public double calculateMean(List<Integer> grades) {
        return grades.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    }

    // Calculate median
    public double calculateMedian(List<Integer> grades) {
        List<Integer> sortedGrades = grades.stream().sorted().collect(Collectors.toList());
        int size = sortedGrades.size();
        if (size % 2 == 1) {
            return sortedGrades.get(size / 2);
        } else {
            return (sortedGrades.get(size / 2 - 1) + sortedGrades.get(size / 2)) / 2.0;
        }
    }

    // Calculate standard deviation
    public double calculateStandardDeviation(List<Integer> grades) {
        double mean = calculateMean(grades);
        double variance = grades.stream()
                .mapToDouble(grade -> Math.pow(grade - mean, 2))
                .average().orElse(0.0);
        return Math.sqrt(variance);
    }
}
