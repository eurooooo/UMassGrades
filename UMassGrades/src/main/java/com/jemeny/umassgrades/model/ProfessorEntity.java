package com.jemeny.umassgrades.model;

public record ProfessorEntity(Long id,
                              String name,
                              Double rmpScore,
                              Double rmpDiff,
                              String rmpLink
                              ) {
}
