import { useLanguageStore } from "@/store/language-store";

export function useLanguage() {
  const selectedLanguageId = useLanguageStore(
    (state) => state.selectedLanguageId,
  );
  const hasHydrated = useLanguageStore((state) => state.hasHydrated);
  const setSelectedLanguage = useLanguageStore(
    (state) => state.setSelectedLanguage,
  );
  const clearSelectedLanguage = useLanguageStore(
    (state) => state.clearSelectedLanguage,
  );

  return {
    selectedLanguageId,
    isLoaded: hasHydrated,
    setSelectedLanguage,
    clearSelectedLanguage,
  };
}
