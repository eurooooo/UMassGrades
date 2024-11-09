package com.jemeny.umassgrades.model;

import com.jemeny.umassgrades.model.ProfessorEntity;

import java.util.List;

public record ClassEntity(Long id,
                          String name,
                          List<ProfessorEntity> professors,
                          List<Integer> grades) {
}
