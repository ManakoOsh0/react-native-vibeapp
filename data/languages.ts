import type { Language } from "@/types/learning";

export const languages: Language[] = [
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
    flagEmoji: "🇪🇸",
    tagline: "Speak with confidence from day one.",
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Français",
    flagEmoji: "🇫🇷",
    tagline: "Sound natural in daily conversations.",
  },
  {
    id: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flagEmoji: "🇯🇵",
    tagline: "Learn polite phrases for everyday life.",
  },
  {
    id: "ko",
    name: "Korean",
    nativeName: "한국어",
    flagEmoji: "🇰🇷",
    tagline: "Start with friendly Korean greetings.",
  },
  {
    id: "de",
    name: "German",
    nativeName: "Deutsch",
    flagEmoji: "🇩🇪",
    tagline: "Build a solid foundation in German.",
  },
  {
    id: "zh",
    name: "Chinese",
    nativeName: "中文",
    flagEmoji: "🇨🇳",
    tagline: "Master everyday Mandarin greetings.",
  },
];

export function getLanguageById(id: string): Language | undefined {
  return languages.find((language) => language.id === id);
}
