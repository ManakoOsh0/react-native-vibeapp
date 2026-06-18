import type { Lesson, LessonStatus } from "@/types/learning";

/**
 * Mock lesson progress used until a persisted progress store is added.
 * First two lessons in a unit are completed, third is in progress, rest not started.
 */
export function getLessonStatus(
  lesson: Lesson,
  unitLessons: Lesson[],
): LessonStatus {
  const index = unitLessons.findIndex((item) => item.id === lesson.id);

  if (index < 0) {
    return "not_started";
  }

  const total = unitLessons.length;

  if (total <= 2) {
    if (index === 0) {
      return "completed";
    }

    if (index === 1) {
      return "in_progress";
    }

    return "not_started";
  }

  if (index < 2) {
    return "completed";
  }

  if (index === 2) {
    return "in_progress";
  }

  return "not_started";
}

export function countCompletedLessons(unitLessons: Lesson[]): number {
  return unitLessons.filter(
    (lesson) => getLessonStatus(lesson, unitLessons) === "completed",
  ).length;
}
