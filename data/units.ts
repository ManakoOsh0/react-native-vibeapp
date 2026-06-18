import type { LanguageCode, Unit } from "@/types/learning";

export const units: Unit[] = [
  // Spanish
  {
    id: "es-unit-1",
    languageId: "es",
    order: 1,
    title: "Unit 1 · Greetings",
    description: "Say hello, goodbye, and introduce yourself.",
  },
  {
    id: "es-unit-2",
    languageId: "es",
    order: 2,
    title: "Unit 2 · Everyday Basics",
    description: "Count, order food, and handle simple requests.",
  },

  // Chinese
  {
    id: "zh-unit-1",
    languageId: "zh",
    order: 1,
    title: "Unit 1 · Greetings",
    description: "Greet people politely and express thanks.",
  },
  {
    id: "zh-unit-2",
    languageId: "zh",
    order: 2,
    title: "Unit 2 · Getting Around",
    description: "Ask simple questions and understand directions.",
  },

  // French
  {
    id: "fr-unit-1",
    languageId: "fr",
    order: 1,
    title: "Unit 1 · Greetings",
    description: "Start conversations and ask how someone is doing.",
  },
  {
    id: "fr-unit-2",
    languageId: "fr",
    order: 2,
    title: "Unit 2 · Café Culture",
    description: "Order drinks and talk about preferences.",
  },

  // Japanese
  {
    id: "ja-unit-1",
    languageId: "ja",
    order: 1,
    title: "Unit 1 · Greetings",
    description: "Say hello and introduce yourself politely.",
  },
  {
    id: "ja-unit-2",
    languageId: "ja",
    order: 2,
    title: "Unit 2 · Daily Life",
    description: "Talk about routines and simple needs.",
  },

  // German
  {
    id: "de-unit-1",
    languageId: "de",
    order: 1,
    title: "Unit 1 · Greetings",
    description: "Greet people and ask how they are.",
  },
  {
    id: "de-unit-2",
    languageId: "de",
    order: 2,
    title: "Unit 2 · Everyday Basics",
    description: "Order food and handle simple requests.",
  },

  // Korean
  {
    id: "ko-unit-1",
    languageId: "ko",
    order: 1,
    title: "Unit 1 · Greetings",
    description: "Learn friendly Korean hellos and goodbyes.",
  },
  {
    id: "ko-unit-2",
    languageId: "ko",
    order: 2,
    title: "Unit 2 · Daily Life",
    description: "Express thanks and talk about your day.",
  },
];

export function getUnitsByLanguage(languageId: LanguageCode): Unit[] {
  return units
    .filter((unit) => unit.languageId === languageId)
    .sort((a, b) => a.order - b.order);
}

export function getUnitById(id: string): Unit | undefined {
  return units.find((unit) => unit.id === id);
}
