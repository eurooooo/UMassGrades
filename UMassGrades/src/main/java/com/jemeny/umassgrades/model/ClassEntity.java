package com.jemeny.umassgrades.model;

import java.util.List;

public record ClassEntity(Long id,
                          String classId,
                          String className,
                          String description,
                          List<ProfessorEntity> profs) {
}
