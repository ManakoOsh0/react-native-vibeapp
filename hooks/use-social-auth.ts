import { useAuthStore } from "@/store/auth-store";
import { router } from "expo-router";
import { useCallback, useState } from "react";

export type SocialAuthStrategy = "oauth_google" | "oauth_facebook" | "oauth_apple";

export function useSocialAuth() {
  const signIn = useAuthStore((state) => state.signIn);
  const [isLoading, setIsLoading] = useState(false);

  const startSocialAuth = useCallback(
    async (_strategy: SocialAuthStrategy) => {
      setIsLoading(true);

      try {
        signIn("demo@vibeapp.com");
        router.replace("/index");
      } finally {
        setIsLoading(false);
      }
    },
    [signIn],
  );

  return {
    errorMessage: "",
    isLoading,
    startSocialAuth,
  };
}
