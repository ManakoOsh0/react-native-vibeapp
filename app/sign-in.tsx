import { AuthField } from "@/components/auth-field";
import { SocialAuthButtons } from "@/components/social-auth-buttons";
import { VerificationModal } from "@/components/verification-modal";
import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link, Stack, router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [verificationVisible, setVerificationVisible] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

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
            <Text className="text__h1">Welcome back</Text>
            <Text className="text__body-lg text-text-secondary">
              Continue your language journey ✨
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
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setVerificationVisible(true)}
            className="mt-6 rounded-2xl bg-lingua-purple px-6 py-4"
          >
            <Text className="text-center text__h4 text-white">Sign In</Text>
          </TouchableOpacity>

          <View className="mt-6">
            <SocialAuthButtons />
          </View>

          <View className="mt-8 flex-row items-center justify-center">
            <Text className="text__body-md text-text-secondary">
              Don&apos;t have an account?{" "}
            </Text>
            <Link href="/sign-up" asChild>
              <TouchableOpacity activeOpacity={0.7}>
                <Text className="text__body-md font-semibold text-lingua-purple">
                  Sign up
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
      />
    </>
  );
}
