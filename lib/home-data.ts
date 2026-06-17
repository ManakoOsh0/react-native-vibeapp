import { getLanguageById } from "@/data/languages";
import { getLessonsByLanguage } from "@/data/lessons";
import { getUnitById } from "@/data/units";
import type { LanguageCode, Lesson, LessonImageKey } from "@/types/learning";

export type TodayPlanItemType = "lesson" | "ai-conversation" | "vocabulary";

export type TodayPlanItem = {
  id: string;
  type: TodayPlanItemType;
  title: string;
  subtitle: string;
  completed: boolean;
};

export type HomeScreenData = {
  languageName: string;
  flagEmoji: string;
  currentLesson: Lesson;
  unitLabel: string;
  levelLabel: string;
  dailyXpCurrent: number;
  dailyXpTarget: number;
  streak: number;
  todayPlan: TodayPlanItem[];
  continueImageKey: LessonImageKey;
};

const DAILY_XP_TARGET = 20;
const DEMO_STREAK = 12;

function getLevelLabel(unitOrder: number): string {
  if (unitOrder <= 2) {
    return "A1";
  }

  if (unitOrder <= 4) {
    return "A2";
  }

  return "B1";
}

function getCurrentLesson(languageId: LanguageCode): Lesson {
  const lessons = getLessonsByLanguage(languageId);
  const inProgressLesson =
    lessons.find((lesson) => lesson.unitId.includes("unit-2") && lesson.order === 2) ??
    lessons[Math.min(3, lessons.length - 1)] ??
    lessons[0];

  return inProgressLesson;
}

function buildTodayPlan(lesson: Lesson, lessons: Lesson[]): TodayPlanItem[] {
  const unitLessons = lessons.filter((item) => item.unitId === lesson.unitId);
  const vocabularyCount = unitLessons.reduce(
    (total, item) => total + item.vocabulary.length,
    0,
  );

  return [
    {
      id: `${lesson.id}-lesson`,
      type: "lesson",
      title: "Lesson",
      subtitle: lesson.subtitle,
      completed: true,
    },
    {
      id: `${lesson.id}-conversation`,
      type: "ai-conversation",
      title: "AI Conversation",
      subtitle: "Talk about your day",
      completed: false,
    },
    {
      id: `${lesson.id}-vocabulary`,
      type: "vocabulary",
      title: "New words",
      subtitle: `${vocabularyCount} words`,
      completed: false,
    },
  ];
}

export function getHomeScreenData(languageId: LanguageCode): HomeScreenData {
  const language = getLanguageById(languageId);
  const lessons = getLessonsByLanguage(languageId);
  const currentLesson = getCurrentLesson(languageId);
  const unit = getUnitById(currentLesson.unitId);

  return {
    languageName: language?.name ?? "Spanish",
    flagEmoji: language?.flagEmoji ?? "🇪🇸",
    currentLesson,
    unitLabel: unit ? `Unit ${unit.order}` : "Unit 1",
    levelLabel: getLevelLabel(unit?.order ?? 1),
    dailyXpCurrent: currentLesson.xpReward,
    dailyXpTarget: DAILY_XP_TARGET,
    streak: DEMO_STREAK,
    todayPlan: buildTodayPlan(currentLesson, lessons),
    continueImageKey: "palace",
  };
}
