import { images } from "@/constants/images";
import { useAuth } from "@/hooks/use-auth";
import { useLanguage } from "@/hooks/use-language";
import { getHomeScreenData } from "@/lib/home-data";
import type { TodayPlanItemType } from "@/lib/home-data";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useMemo } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AI_TEACHER_AVATAR =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face";

function getDisplayName(email: string | null): string {
  if (!email) {
    return "there";
  }

  const prefix = email.split("@")[0] ?? "there";

  if (prefix === "demo") {
    return "Alex";
  }

  return prefix.charAt(0).toUpperCase() + prefix.slice(1);
}

type PlanIconProps = {
  type: TodayPlanItemType;
};

function PlanIcon({ type }: PlanIconProps) {
  if (type === "vocabulary") {
    return (
      <View
        className="h-11 w-11 items-center justify-center overflow-hidden rounded-xl"
        style={{ backgroundColor: "#FF8B7B" }}
      >
        <Image
          source={images.mascotWelcome}
          style={{ width: 34, height: 34 }}
          contentFit="contain"
        />
      </View>
    );
  }

  return (
    <View className="h-11 w-11 items-center justify-center rounded-xl bg-lingua-purple">
      <Ionicons
        name={type === "lesson" ? "book" : "headset"}
        size={22}
        color="#FFFFFF"
      />
    </View>
  );
}

export default function HomeScreen() {
  const { email } = useAuth();
  const { selectedLanguageId, isLoaded, clearSelectedLanguage } = useLanguage();

  const homeData = useMemo(() => {
    if (!selectedLanguageId) {
      return null;
    }

    return getHomeScreenData(selectedLanguageId);
  }, [selectedLanguageId]);

  const firstName = getDisplayName(email);

  const dailyProgress =
    homeData && homeData.dailyXpTarget > 0
      ? Math.min(homeData.dailyXpCurrent / homeData.dailyXpTarget, 1)
      : 0;

  const handleClearLanguage = () => {
    clearSelectedLanguage();
    router.replace("/select-language");
  };

  if (!isLoaded || !homeData) {
    return null;
  }

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: "#F6F7FB" }}
    >
      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-8 pt-2"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2.5">
            <View className="h-10 w-10 items-center justify-center rounded-full bg-white">
              <Text className="text-[20px]">{homeData.flagEmoji}</Text>
            </View>
            <Text className="text__h4">
              Hola, {firstName}! <Text>👋</Text>
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1">
              <Image
                source={images.streakFire}
                style={{ width: 22, height: 22 }}
                contentFit="contain"
              />
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 16,
                  color: "#FF8A00",
                }}
              >
                {homeData.streak}
              </Text>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Notifications"
              className="h-10 w-10 items-center justify-center rounded-full bg-white"
            >
              <Ionicons name="notifications-outline" size={22} color="#0D132B" />
            </Pressable>
          </View>
        </View>

        <View
          className="mt-5 overflow-hidden rounded-3xl bg-white px-5 py-4"
          style={Platform.select({
            ios: {
              shadowColor: "#0D132B",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.06,
              shadowRadius: 12,
            },
            android: { elevation: 3 },
            default: {},
          })}
        >
          <View className="flex-row items-start justify-between">
            <View className="flex-1 pr-3">
              <Text className="text__body-sm text-text-secondary">Daily goal</Text>
              <Text className="text__h3 mt-1">
                {homeData.dailyXpCurrent} / {homeData.dailyXpTarget} XP
              </Text>

              <View className="mt-3 h-2.5 overflow-hidden rounded-full bg-[#F3E8D8]">
                <View
                  className="h-full rounded-full bg-streak"
                  style={{ width: `${dailyProgress * 100}%` }}
                />
              </View>
            </View>

            <Image
              source={images.treasure}
              style={{ width: 72, height: 72 }}
              contentFit="contain"
            />
          </View>
        </View>

        <View
          className="mt-4 overflow-hidden rounded-3xl px-5 py-5"
          style={{
            experimental_backgroundImage:
              "linear-gradient(135deg, #6C4EF5 0%, #4D8BFF 100%)",
            ...Platform.select({
              ios: {
                shadowColor: "#6C4EF5",
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.25,
                shadowRadius: 16,
              },
              android: { elevation: 6 },
              default: {},
            }),
          }}
        >
          <View className="flex-row items-end justify-between">
            <View className="flex-1 pr-2">
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Continue learning
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Bold",
                  fontSize: 28,
                  color: "#FFFFFF",
                  marginTop: 4,
                }}
              >
                {homeData.languageName}
              </Text>
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.9)",
                  marginTop: 2,
                }}
              >
                {homeData.levelLabel} • {homeData.unitLabel}
              </Text>

              <TouchableOpacity
                activeOpacity={0.85}
                className="mt-5 self-start rounded-full bg-white px-6 py-2.5"
              >
                <Text
                  style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 14,
                    color: "#6C4EF5",
                  }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>

            <Image
              source={images[homeData.continueImageKey]}
              style={{ width: 110, height: 110 }}
              contentFit="contain"
            />
          </View>
        </View>

        <View className="mt-6 flex-row items-center justify-between">
          <Text className="text__h4">Today&apos;s plan</Text>
          <Pressable accessibilityRole="button">
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 14,
                color: "#6C4EF5",
              }}
            >
              View all
            </Text>
          </Pressable>
        </View>

        <View className="mt-3 gap-3">
          {homeData.todayPlan.map((item) => (
            <View
              key={item.id}
              className="flex-row items-center rounded-2xl bg-white px-4 py-3.5"
              style={Platform.select({
                ios: {
                  shadowColor: "#0D132B",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.04,
                  shadowRadius: 8,
                },
                android: { elevation: 2 },
                default: {},
              })}
            >
              <PlanIcon type={item.type} />

              <View className="ml-3 flex-1">
                <Text className="text__h4">{item.title}</Text>
                <Text className="text__body-sm text-text-secondary">
                  {item.subtitle}
                </Text>
              </View>

              {item.completed ? (
                <View className="h-7 w-7 items-center justify-center rounded-full bg-lingua-purple">
                  <Ionicons name="checkmark" size={18} color="#FFFFFF" />
                </View>
              ) : (
                <View className="h-7 w-7 rounded-full border-2 border-border" />
              )}
            </View>
          ))}
        </View>

        <View
          className="mt-4 rounded-3xl bg-[#E8F8EF] px-5 py-4"
          style={Platform.select({
            ios: {
              shadowColor: "#0D132B",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.05,
              shadowRadius: 10,
            },
            android: { elevation: 2 },
            default: {},
          })}
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-1 pr-3">
              <Text className="text__body-sm text-text-secondary">Next up</Text>
              <Text className="text__h4 mt-0.5">AI Video Call</Text>
              <Text className="text__body-sm text-text-secondary">
                Practice speaking
              </Text>
            </View>

            <View className="flex-row items-center gap-3">
              <Image
                source={{ uri: AI_TEACHER_AVATAR }}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 26,
                  borderWidth: 3,
                  borderColor: "#FFFFFF",
                }}
                contentFit="cover"
              />

              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Start AI video call"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 22,
                  backgroundColor: "#21C16B",
                  alignItems: "center",
                  justifyContent: "center",
                  ...Platform.select({
                    ios: {
                      shadowColor: "#21C16B",
                      shadowOffset: { width: 0, height: 3 },
                      shadowOpacity: 0.3,
                      shadowRadius: 6,
                    },
                    android: { elevation: 4 },
                    default: {},
                  }),
                }}
              >
                <Ionicons name="videocam" size={20} color="#FFFFFF" />
              </Pressable>
            </View>
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleClearLanguage}
          className="mt-8 items-center py-2"
        >
          <Text className="text__caption text-text-secondary">
            Clear language (testing)
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
