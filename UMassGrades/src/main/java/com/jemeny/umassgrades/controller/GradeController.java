package com.jemeny.umassgrades.controller;

import com.jemeny.umassgrades.model.GradeEntity;
import com.jemeny.umassgrades.service.GradeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/grades")
public class GradeController {

    private final GradeService gradeService;

    public GradeController(GradeService gradeService) {
        this.gradeService = gradeService;
    }

    @GetMapping
    public Iterable<GradeEntity> getAllGrades() {
        return gradeService.getAllGrades();
    }

    @GetMapping("/{id}/grades")
    public Map<String, Object> getClassGrades(@PathVariable Long id) {
        GradeEntity gradeData = gradeService.getGradeById(id);
        if (gradeData == null)
            return null;

        Map<String, Object> response = new HashMap<>();
        response.put("statistics", Map.of(
                "mean", gradeService.calculateMean(),
                "median", gradeService.calculateMedian(),
                "stdDev", gradeService.calculateStandardDeviation()
        ));

        return response;
    }
}
