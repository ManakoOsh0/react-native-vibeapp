import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthState = {
  email: string | null;
  hasHydrated: boolean;
  isSignedIn: boolean;
  setHasHydrated: (value: boolean) => void;
  signIn: (email: string) => void;
  signOut: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      email: null,
      hasHydrated: false,
      isSignedIn: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),
      signIn: (email) => set({ email, isSignedIn: true }),
      signOut: () => set({ email: null, isSignedIn: false }),
    }),
    {
      name: "vibeapp-auth",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
      partialize: (state) => ({
        email: state.email,
        isSignedIn: state.isSignedIn,
      }),
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
