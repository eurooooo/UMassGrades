export function gradeToColor(grade) {
  switch (grade) {
    case "A":
      return "#4CAF50";
    case "A-":
      return "#8BC34A";
    case "B+":
      return "#CDDC39";
    case "B":
      return "#FFEB3B";
    case "B-":
      return "#FFC107";
    case "C+":
      return "#FF9800";
    case "C":
      return "#FF5722";
    case "C-":
      return "#F44336";
    case "D":
      return "#E91E63";
    case "F":
      return "#9C27B0";
    default:
      return null; // Return null for unknown grades
  }
}

export function gradeToGPA(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.3;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.3;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.3;
    case "D":
      return 1.0;
    case "F":
      return 0.0;
    default:
      return null; // Return null for unknown grades
  }
}

export function calculateAverageGPA(grades) {
  let totalPoints = 0;
  let totalCount = 0;

  grades.forEach(({ grade, count }) => {
    const gpa = gradeToGPA(grade);
    if (gpa !== null) {
      totalPoints += gpa * count;
      totalCount += count;
    }
  });

  const averageGPA = totalCount > 0 ? totalPoints / totalCount : 0;

  // Find the nearest grade label for the average GPA
  let nearestGrade = "";
  let smallestDifference = Infinity;

  grades.forEach(({ grade }) => {
    const gpa = gradeToGPA(grade);
    if (gpa !== null && Math.abs(averageGPA - gpa) < smallestDifference) {
      smallestDifference = Math.abs(averageGPA - gpa);
      nearestGrade = grade;
    }
  });

  return `${nearestGrade} Average (${averageGPA.toFixed(3)})`;
}

export function calculateMostCommon(grades) {
  let totalCount = 0;
  let mostCommonGrade = "";
  let highestCount = 0;

  grades.forEach(({ grade, count }) => {
    totalCount += count; // Sum up total count of all grades
    if (count > highestCount) {
      highestCount = count;
      mostCommonGrade = grade;
    }
  });

  const percentage = ((highestCount / totalCount) * 100).toFixed(1); // Calculate percentage
  return `Most Common: ${mostCommonGrade} (${percentage}%)`;
}
