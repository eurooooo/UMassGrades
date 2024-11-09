package com.jemeny.umassgrades.model;

import java.util.List;

public record GradeEntity(Long id,
                          List<Integer> gradeData,
                          ProfessorEntity professor,
                          ClassEntity class_,
                          String semester,
                          Double mean,
                          Double min,
                          Double max,
                          Double stdDev) {
}
