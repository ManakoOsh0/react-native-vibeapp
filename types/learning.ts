/** Supported target languages users can learn. */
export type LanguageCode = "es" | "zh" | "fr" | "ja" | "de" | "ko";

/** Keys from `constants/images` used on lesson cards. */
export type LessonImageKey =
  | "palace"
  | "treasure"
  | "earth"
  | "mascotWelcome";

/** Visual progress state shown on lesson cards. */
export type LessonStatus = "completed" | "in_progress" | "not_started";

export type Language = {
  id: LanguageCode;
  /** Display name in English (instruction language). */
  name: string;
  /** Name written in the target language. */
  nativeName: string;
  flagEmoji: string;
  /** Short tagline shown on language selection. */
  tagline: string;
};

export type VocabularyItem = {
  id: string;
  /** Word or expression in the target language. */
  term: string;
  /** English translation shown to the learner. */
  translation: string;
  /** Optional romanization or phonetic hint. */
  pronunciation?: string;
};

export type Phrase = {
  id: string;
  /** Full phrase in the target language. */
  text: string;
  /** English translation. */
  translation: string;
  pronunciation?: string;
};

export type LessonGoal = {
  /** One-line summary of what the learner will be able to do. */
  summary: string;
  /** Skill tags used for progress and filtering. */
  skills: string[];
};

export type ActivityType =
  | "vocabulary"
  | "listening"
  | "speaking"
  | "matching"
  | "fill-blank"
  | "ai-teacher";

export type Activity = {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
};

/**
 * Prompt bundle for future audio / Vision Agent teacher sessions.
 * `systemContext` is sent to the agent; `openingLine` kicks off the lesson.
 */
export type AiTeacherPrompt = {
  systemContext: string;
  openingLine: string;
  /** Hints the teacher should weave into the conversation. */
  teachingNotes: string[];
};

export type Unit = {
  id: string;
  languageId: LanguageCode;
  order: number;
  title: string;
  description: string;
};

export type Lesson = {
  id: string;
  unitId: string;
  languageId: LanguageCode;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  imageKey: LessonImageKey;
  xpReward: number;
  estimatedMinutes: number;
  goal: LessonGoal;
  vocabulary: VocabularyItem[];
  phrases: Phrase[];
  activities: Activity[];
  aiTeacher: AiTeacherPrompt;
};
