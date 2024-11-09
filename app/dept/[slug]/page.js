"use client";

import { OverallCard, ClassCard } from "@/components/ProfPageCards";
import {
  calculateAverageGPA,
  calculateMostCommon,
  formatGradeData,
  mergeGrades,
} from "@/lib/grade";
import SearchWithDropdown from "@/components/SearchWithDropdown";

const departments = {
  deptId: "CS",
  deptName: "Computer Science",
  classes: [
    {
      classId: "CS200",
      className: "Operating System",
      grades: [
        { grade: "A", count: 3 },
        { grade: "A-", count: 2 },
        { grade: "B+", count: 4 },
        { grade: "B", count: 5 },
        { grade: "B-", count: 2 },
        { grade: "C+", count: 3 },
        { grade: "C", count: 2 },
        { grade: "C-", count: 1 },
        { grade: "D+", count: 1 },
        { grade: "D", count: 0 },
        { grade: "F", count: 0 },
      ],
    },
    {
      classId: "CS300",
      className: "Algorithms",
      grades: [
        { grade: "A", count: 6 },
        { grade: "A-", count: 4 },
        { grade: "B+", count: 5 },
        { grade: "B", count: 3 },
        { grade: "B-", count: 2 },
        { grade: "C+", count: 3 },
        { grade: "C", count: 1 },
        { grade: "C-", count: 1 },
        { grade: "D+", count: 0 },
        { grade: "D", count: 1 },
        { grade: "F", count: 1 },
      ],
    },
  ],
};

const grades = departments.classes.map((clazz) => {
  return {
    id: clazz.classId,
    name: clazz.className,
    students: clazz.grades.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    ),
    average: calculateAverageGPA(clazz.grades),
    common: calculateMostCommon(clazz.grades),
    gradeData: formatGradeData(clazz.grades),
  };
});

const overallGrades = mergeGrades(departments.classes);
const overallData = {
  students: overallGrades.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    0
  ),
  average: calculateAverageGPA(overallGrades),
  common: calculateMostCommon(overallGrades),
  gradeData: formatGradeData(overallGrades),
};

export default function DeptSlug() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        <SearchWithDropdown />

        <Overview />

        <OverallCard overallData={overallData} />

        {grades.map((grade) => (
          <ClassCard clazz={grade} key={grade.name} />
        ))}
      </div>
    </div>
  );
}

export function Overview() {
  return (
    <div className="mb-8">
      <h1 className="mb-2 text-3xl font-bold text-red-900">
        {departments.deptId}: {departments.deptName}
      </h1>
    </div>
  );
}
