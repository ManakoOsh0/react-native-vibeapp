import { images } from "@/constants/images";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Stack, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SpeechBubbleProps = {
  text: string;
  className: string;
  textClassName: string;
};

function SpeechBubble({ text, className, textClassName }: SpeechBubbleProps) {
  return (
    <View className={`rounded-2xl px-4 py-2.5 ${className}`}>
      <Text className={`text__body-md font-medium ${textClassName}`}>{text}</Text>
    </View>
  );
}

export default function OnboardingScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <View className="flex-1 px-6 pb-6">
          <View className="flex-row items-center gap-2.5 pt-2">
            <Image
              source={images.mascotLogo}
              style={{ width: 36, height: 36 }}
              contentFit="contain"
            />
            <Text className="text__logo">muolingo</Text>
          </View>

          <View className="mt-8 gap-3">
            <Text className="text__h1">
              Your AI language{"\n"}
              <Text className="text-lingua-purple">teacher.</Text>
            </Text>
            <Text className="text__body-lg text-text-secondary">
              Real conversations, personalized lessons, anytime, anywhere.
            </Text>
          </View>

          <View className="flex-1 items-center justify-center">
            <View className="relative h-[320px] w-full max-w-[340px]">
              <View className="absolute left-0 top-6 z-10">
                <SpeechBubble
                  text="Hello!"
                  className="bg-[#EAF2FF]"
                  textClassName="text-text-primary"
                />
              </View>

              <View className="absolute right-0 top-0 z-10">
                <SpeechBubble
                  text="¡Hola!"
                  className="bg-[#EDE8FE]"
                  textClassName="text-lingua-purple"
                />
              </View>

              <View className="absolute right-2 top-[108px] z-10">
                <SpeechBubble
                  text="你好!"
                  className="bg-[#FFE8F0]"
                  textClassName="text-[#E8456A]"
                />
              </View>

              <View className="absolute bottom-0 left-0 right-0 items-center">
                <Image
                  source={images.mascotWelcome}
                  style={{ width: "100%", height: 260 }}
                  contentFit="contain"
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/sign-up")}
            className="flex-row items-center justify-between rounded-2xl bg-lingua-purple px-6 py-4"
          >
            <Text className="text__h4 text-white">Get Started</Text>
            <Ionicons name="chevron-forward" size={22} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}
