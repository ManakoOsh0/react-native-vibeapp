import { LessonCard } from "@/components/lesson-card";
import { images } from "@/constants/images";
import { useLanguage } from "@/hooks/use-language";
import { getLearnScreenData } from "@/lib/learn-data";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type LearnTab = "lessons" | "practice";

export default function LearnScreen() {
  const { selectedLanguageId, isLoaded } = useLanguage();
  const [activeTab, setActiveTab] = useState<LearnTab>("lessons");

  const learnData = useMemo(() => {
    if (!selectedLanguageId) {
      return null;
    }

    return getLearnScreenData(selectedLanguageId);
  }, [selectedLanguageId]);

  const handleOpenLesson = (lessonId: string) => {
    router.push({
      pathname: "/lesson/[id]",
      params: { id: lessonId },
    });
  };

  if (!isLoaded || !learnData) {
    return null;
  }

  const unitShortTitle = learnData.activeUnit.title.replace(/^Unit \d+ · /, "");

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={{ flex: 1, backgroundColor: "#FFFFFF" }}
    >
      <View className="flex-1">
        <View className="px-5 pt-1">
          <View className="flex-row items-center">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.navigate("/")}
              className="h-10 w-10 items-center justify-center"
            >
              <Ionicons name="chevron-back" size={28} color="#0D132B" />
            </TouchableOpacity>

            <View className="ml-1 flex-1">
              <Text className="text__h3">{unitShortTitle}</Text>
              <Text className="text__body-sm text-text-secondary">
                Unit {learnData.activeUnit.order} • {learnData.completedCount} /{" "}
                {learnData.totalLessons} lessons
              </Text>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Bookmark unit"
              className="h-10 w-10 items-center justify-center"
            >
              <Ionicons name="bookmark-outline" size={24} color="#FF8A00" />
            </Pressable>
          </View>
        </View>

        <ScrollView
          className="flex-1"
          contentContainerClassName="pb-6"
          showsVerticalScrollIndicator={false}
        >
          <View className="mt-3 overflow-hidden px-5">
            <Image
              source={images[learnData.heroImageKey]}
              style={{
                width: "100%",
                height: 220,
                borderRadius: 20,
              }}
              contentFit="cover"
            />
          </View>

          <View className="mx-5 mt-5 flex-row rounded-2xl bg-surface p-1">
            <Pressable
              accessibilityRole="tab"
              accessibilityState={{ selected: activeTab === "lessons" }}
              onPress={() => setActiveTab("lessons")}
              className={`flex-1 items-center rounded-xl py-2.5 ${
                activeTab === "lessons" ? "bg-background" : ""
              }`}
            >
              <Text
                className="text__h4"
                style={{
                  color: activeTab === "lessons" ? "#0D132B" : "#9CA3AF",
                }}
              >
                Lessons
              </Text>
              {activeTab === "lessons" ? (
                <View className="mt-1 h-0.5 w-10 rounded-full bg-lingua-blue" />
              ) : null}
            </Pressable>

            <Pressable
              accessibilityRole="tab"
              accessibilityState={{ selected: activeTab === "practice" }}
              onPress={() => setActiveTab("practice")}
              className={`flex-1 items-center rounded-xl py-2.5 ${
                activeTab === "practice" ? "bg-background" : ""
              }`}
            >
              <Text
                className="text__h4"
                style={{
                  color: activeTab === "practice" ? "#0D132B" : "#9CA3AF",
                }}
              >
                Practice
              </Text>
              {activeTab === "practice" ? (
                <View className="mt-1 h-0.5 w-10 rounded-full bg-lingua-blue" />
              ) : null}
            </Pressable>
          </View>

          {activeTab === "lessons" ? (
            <View className="mt-4 gap-3 px-5">
              {learnData.sections.map((section) => (
                <View key={section.unit.id} className="gap-3">
                  {learnData.sections.length > 1 ? (
                    <Text className="text__body-sm text-text-secondary pt-1">
                      {section.unit.title}
                    </Text>
                  ) : null}
                  {section.lessons.map((item) => (
                    <LessonCard
                      key={item.lesson.id}
                      lesson={item.lesson}
                      lessonNumber={item.lessonNumber}
                      status={item.status}
                      onPress={() => handleOpenLesson(item.lesson.id)}
                    />
                  ))}
                </View>
              ))}
            </View>
          ) : (
            <View
              className="mx-5 mt-4 items-center rounded-2xl bg-surface px-6 py-10"
              style={Platform.select({
                ios: {
                  shadowColor: "#0D132B",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.04,
                  shadowRadius: 8,
                },
                android: { elevation: 1 },
                default: {},
              })}
            >
              <Ionicons name="barbell-outline" size={40} color="#9CA3AF" />
              <Text className="text__h4 mt-3">Practice mode</Text>
              <Text className="text__body-sm mt-1 text-center text-text-secondary">
                Review vocabulary and phrases from {learnData.languageName}{" "}
                lessons. Coming soon.
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
