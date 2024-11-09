package com.jemeny.umassgrades.service;

import com.jemeny.umassgrades.model.GradeEntity;
import jakarta.annotation.PostConstruct;
import net.datafaker.Faker;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

@Service
public class GradeService {

    private final List<Integer> gradeData = new ArrayList<>();
    private final Faker faker = new Faker();
    private final Random random = new Random();

    @PostConstruct
    private void initGradeData() {
        for (int i = 0; i < 200; i++) {
            gradeData.add(random.nextInt(100) + 1);
        }
    }

    public double calculateMean(List<Integer> grades) {
        return grades.stream().mapToInt(Integer::intValue).average().orElse(0.0);
    }

    public double calculateMedian(List<Integer> grades) {
        List<Integer> sortedGrades = grades.stream().sorted().toList();
        int size = sortedGrades.size();
        if (size % 2 == 1) {
            return sortedGrades.get(size / 2);
        } else {
            return (sortedGrades.get(size / 2 - 1) + sortedGrades.get(size / 2)) / 2.0;
        }
    }

    public double calculateStandardDeviation(List<Integer> grades) {
        double mean = calculateMean(grades);
        double variance = grades.stream()
                .mapToDouble(grade -> Math.pow(grade - mean, 2))
                .average().orElse(0.0);
        return Math.sqrt(variance);
    }
}
