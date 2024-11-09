package com.jemeny.umassgrades.model;

import java.util.List;
import com.jemeny.umassgrades.model.ClassEntity;


public record ProfessorEntity(Long id,
                              String name,
                              Double rmpScore,
                              Double rmpDiff,
                              String rmpLink
                              //List<ClassEntity> classes
                              ) {
}
