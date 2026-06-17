import type { LanguageCode } from "@/types/learning";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type LanguageState = {
  selectedLanguageId: LanguageCode | null;
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  setSelectedLanguage: (languageId: LanguageCode) => void;
  clearSelectedLanguage: () => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageId: null,
      hasHydrated: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),
      setSelectedLanguage: (languageId) =>
        set({ selectedLanguageId: languageId }),
      clearSelectedLanguage: () => set({ selectedLanguageId: null }),
    }),
    {
      name: "vibeapp-language",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
      partialize: (state) => ({
        selectedLanguageId: state.selectedLanguageId,
      }),
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
