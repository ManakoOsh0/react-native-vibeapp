import { getLanguageById } from "@/data/languages";
import { getLessonsByLanguage, getLessonsByUnit } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import { countCompletedLessons, getLessonStatus } from "@/lib/lesson-progress";
import type {
  LanguageCode,
  Lesson,
  LessonImageKey,
  LessonStatus,
  Unit,
} from "@/types/learning";

export type LearnLessonItem = {
  lesson: Lesson;
  status: LessonStatus;
  lessonNumber: number;
};

export type LearnUnitSection = {
  unit: Unit;
  lessons: LearnLessonItem[];
  completedCount: number;
  totalLessons: number;
};

export type LearnScreenData = {
  languageName: string;
  flagEmoji: string;
  activeUnit: Unit;
  sections: LearnUnitSection[];
  completedCount: number;
  totalLessons: number;
  heroImageKey: LessonImageKey;
  heroLessonTitle: string;
};

function getActiveUnit(languageId: LanguageCode): Unit | undefined {
  const units = getUnitsByLanguage(languageId);

  for (const unit of units) {
    const unitLessons = getLessonsByUnit(unit.id);
    const hasInProgress = unitLessons.some(
      (lesson) => getLessonStatus(lesson, unitLessons) === "in_progress",
    );

    if (hasInProgress) {
      return unit;
    }
  }

  for (const unit of units) {
    const unitLessons = getLessonsByUnit(unit.id);
    const completed = countCompletedLessons(unitLessons);

    if (completed < unitLessons.length) {
      return unit;
    }
  }

  return units[units.length - 1];
}

function buildUnitSection(unit: Unit): LearnUnitSection {
  const lessons = getLessonsByUnit(unit.id);

  return {
    unit,
    lessons: lessons.map((lesson, index) => ({
      lesson,
      status: getLessonStatus(lesson, lessons),
      lessonNumber: index + 1,
    })),
    completedCount: countCompletedLessons(lessons),
    totalLessons: lessons.length,
  };
}

export function getLearnScreenData(
  languageId: LanguageCode,
): LearnScreenData | null {
  const language = getLanguageById(languageId);
  const units = getUnitsByLanguage(languageId);
  const activeUnit = getActiveUnit(languageId);

  if (!language || !activeUnit || units.length === 0) {
    return null;
  }

  const sections = units.map(buildUnitSection);
  const activeSection =
    sections.find((section) => section.unit.id === activeUnit.id) ??
    sections[0];

  const inProgressLesson = activeSection.lessons.find(
    (item) => item.status === "in_progress",
  );
  const heroLesson = inProgressLesson ?? activeSection.lessons[0];

  return {
    languageName: language.name,
    flagEmoji: language.flagEmoji,
    activeUnit,
    sections,
    completedCount: activeSection.completedCount,
    totalLessons: activeSection.totalLessons,
    heroImageKey: heroLesson?.lesson.imageKey ?? "palace",
    heroLessonTitle: heroLesson?.lesson.title ?? activeUnit.title,
  };
}

export function hasLessonsForLanguage(languageId: LanguageCode): boolean {
  return getLessonsByLanguage(languageId).length > 0;
}
