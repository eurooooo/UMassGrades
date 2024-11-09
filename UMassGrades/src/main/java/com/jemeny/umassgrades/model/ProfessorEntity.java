package com.jemeny.umassgrades.model;

import java.util.List;

public record ProfessorEntity(Long profId,
                              String profName,
                              List<GradeEntity> grades
                              ) {
}
