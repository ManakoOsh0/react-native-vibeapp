import { useAuthStore } from "@/store/auth-store";

export function useAuth() {
  const email = useAuthStore((state) => state.email);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);
  const isSignedIn = useAuthStore((state) => state.isSignedIn);
  const signIn = useAuthStore((state) => state.signIn);
  const signOut = useAuthStore((state) => state.signOut);

  return {
    email,
    isLoaded: hasHydrated,
    isSignedIn,
    signIn,
    signOut,
  };
}
