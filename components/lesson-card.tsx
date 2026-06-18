import { images } from "@/constants/images";
import type { Lesson, LessonStatus } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Platform, Pressable, Text, View } from "react-native";

type LessonCardProps = {
  lesson: Lesson;
  lessonNumber: number;
  status: LessonStatus;
  onPress: () => void;
};

const cardShadow = Platform.select({
  ios: {
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  android: { elevation: 2 },
  default: {},
});

export function LessonCard({
  lesson,
  lessonNumber,
  status,
  onPress,
}: LessonCardProps) {
  const isInProgress = status === "in_progress";
  const isCompleted = status === "completed";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Lesson ${lessonNumber}: ${lesson.title}`}
      onPress={onPress}
      className={`flex-row items-center rounded-2xl px-4 py-4 ${
        isInProgress
          ? "border-2 border-lingua-blue bg-[#EAF2FF]"
          : "border border-border bg-background"
      }`}
      style={cardShadow}
    >
      <View className="flex-1 pr-3">
        <Text
          className="text__body-sm"
          style={{ color: isInProgress ? "#4D8BFF" : "#6B7280" }}
        >
          Lesson {lessonNumber}
        </Text>
        <Text
          className="text__h4 mt-0.5"
          style={{ color: isInProgress ? "#4D8BFF" : "#0D132B" }}
        >
          {lesson.title}
        </Text>
        <Text
          className="text__body-sm mt-0.5"
          style={{ color: isInProgress ? "#4D8BFF" : "#9CA3AF" }}
        >
          {isInProgress ? "In progress" : lesson.subtitle}
        </Text>
      </View>

      {isCompleted ? (
        <View className="h-9 w-9 items-center justify-center rounded-full bg-lingua-green">
          <Ionicons name="checkmark" size={20} color="#FFFFFF" />
        </View>
      ) : isInProgress ? (
        <Image
          source={images[lesson.imageKey]}
          style={{ width: 56, height: 56, borderRadius: 12 }}
          contentFit="cover"
        />
      ) : (
        <View className="h-9 w-9 items-center justify-center rounded-full bg-[#F3F4F6]">
          <Ionicons name="lock-closed" size={18} color="#9CA3AF" />
        </View>
      )}
    </Pressable>
  );
}
