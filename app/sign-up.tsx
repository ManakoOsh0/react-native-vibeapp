import { AuthField } from "@/components/auth-field";
import { SocialAuthButtons } from "@/components/social-auth-buttons";
import { VerificationModal } from "@/components/verification-modal";
import { images } from "@/constants/images";
import { useAuth } from "@/hooks/use-auth";
import { useSocialAuth } from "@/hooks/use-social-auth";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, Redirect, Stack, router } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const { isLoaded, isSignedIn, signIn } = useAuth();
  const socialAuth = useSocialAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationVisible, setVerificationVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [authError, setAuthError] = useState("");

  const handleSignUp = useCallback(() => {
    const emailAddress = email.trim();

    if (!emailAddress || !password) {
      setAuthError("Enter your email and password to continue.");
      return;
    }

    setAuthError("");
    setVerificationCode("");
    setVerificationVisible(true);
  }, [email, password]);

  const handleVerify = useCallback(() => {
    if (verificationCode.length < 6) {
      return;
    }

    signIn(email.trim());
    setVerificationVisible(false);
    router.replace("/index");
  }, [email, signIn, verificationCode]);

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href="/index" />;
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <ScrollView
          className="flex-1"
          contentContainerClassName="grow px-6 pb-8"
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.back()}
            className="mt-2 h-10 w-10 items-center justify-center"
          >
            <Ionicons name="chevron-back" size={28} color="#0D132B" />
          </TouchableOpacity>

          <View className="mt-2 gap-2">
            <Text className="text__h1">Create your account</Text>
            <Text className="text__body-lg text-text-secondary">
              Start your language journey today ✨
            </Text>
          </View>

          <View className="my-6 items-center">
            <Image
              source={images.mascotAuth}
              style={{ width: 220, height: 180 }}
              contentFit="contain"
            />
          </View>

          <View className="gap-4">
            <AuthField
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="alex@gmail.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
            <AuthField
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              secureTextEntry
              showPasswordToggle
              autoComplete="password-new"
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleSignUp}
            disabled={!email.trim() || !password}
            className={`mt-6 rounded-2xl bg-lingua-purple px-6 py-4 ${
              !email.trim() || !password ? "opacity-60" : ""
            }`}
          >
            <Text className="text-center text__h4 text-white">Sign Up</Text>
          </TouchableOpacity>
          {authError ? (
            <Text className="text__body-sm mt-3 text-center text-error">{authError}</Text>
          ) : null}

          <View className="mt-6">
            <SocialAuthButtons
              onGooglePress={() => socialAuth.startSocialAuth("oauth_google")}
              onFacebookPress={() => socialAuth.startSocialAuth("oauth_facebook")}
              onApplePress={() => socialAuth.startSocialAuth("oauth_apple")}
            />
          </View>

          <View className="mt-8 flex-row items-center justify-center">
            <Text className="text__body-md text-text-secondary">
              Already have an account?{" "}
            </Text>
            <Link href="/sign-in" asChild>
              <TouchableOpacity activeOpacity={0.7}>
                <Text className="text__body-md font-semibold text-lingua-purple">
                  Log in
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>

      <VerificationModal
        visible={verificationVisible}
        onClose={() => setVerificationVisible(false)}
        code={verificationCode}
        onChangeCode={setVerificationCode}
        onVerify={handleVerify}
      />
    </>
  );
}
