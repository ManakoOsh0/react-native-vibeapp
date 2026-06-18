import { images, imageUris } from "@/constants/images";
import { getLanguageById } from "@/data/languages";
import { getLessonById } from "@/data/lessons";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SessionStatus = "connecting" | "online" | "ended";

type ControlButtonProps = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  active?: boolean;
  danger?: boolean;
  iconRotation?: string;
};

const controlShadow = Platform.select({
  ios: {
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  android: { elevation: 3 },
  default: {},
});

const cardShadow = Platform.select({
  ios: {
    shadowColor: "#0D132B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
  },
  android: { elevation: 2 },
  default: {},
});

function ControlButton({
  label,
  icon,
  onPress,
  active = false,
  danger = false,
  iconRotation,
}: ControlButtonProps) {
  return (
    <View className="items-center">
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={label}
        onPress={onPress}
        style={[
          {
            width: 58,
            height: 58,
            borderRadius: 29,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: danger ? "#FF4D4F" : "#FFFFFF",
            borderWidth: active && !danger ? 2 : 0,
            borderColor: active && !danger ? "#4D8BFF" : "transparent",
          },
          danger ? {} : controlShadow,
        ]}
      >
        <Ionicons
          name={icon}
          size={24}
          color={danger ? "#FFFFFF" : active ? "#4D8BFF" : "#0D132B"}
          style={iconRotation ? { transform: [{ rotate: iconRotation }] } : undefined}
        />
      </Pressable>
      <Text className="text__caption mt-2 text-text-secondary">{label}</Text>
    </View>
  );
}

export default function AudioLessonScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const lesson = typeof id === "string" ? getLessonById(id) : undefined;
  const language = lesson ? getLanguageById(lesson.languageId) : undefined;

  const [sessionStatus, setSessionStatus] = useState<SessionStatus>("connecting");
  const [micMuted, setMicMuted] = useState(false);
  const [subtitlesOn, setSubtitlesOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const teacherMessage = lesson?.aiTeacher.openingLine ?? "";
  const subtitleLines = useMemo(() => {
    if (!lesson) {
      return [];
    }

    return [
      lesson.goal.summary,
      ...lesson.phrases.map(
        (phrase) => `${phrase.text} — ${phrase.translation}`,
      ),
      ...lesson.aiTeacher.teachingNotes,
    ];
  }, [lesson]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSessionStatus("online");
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!subtitlesOn || subtitleLines.length === 0 || sessionStatus === "ended") {
      return;
    }

    const timer = setInterval(() => {
      setSubtitleIndex((current) => (current + 1) % subtitleLines.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [sessionStatus, subtitleLines.length, subtitlesOn]);

  const handleEndCall = () => {
    setSessionStatus("ended");
    router.back();
  };

  if (!lesson || !language) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Stack.Screen options={{ headerShown: false }} />
        <View className="flex-1 items-center justify-center px-6">
          <Text className="text__h3">Lesson not found</Text>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.back()}
            className="mt-4 rounded-2xl bg-lingua-purple px-6 py-3"
          >
            <Text className="text__h4 text-white">Go back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const statusLabel =
    sessionStatus === "connecting"
      ? "Connecting…"
      : sessionStatus === "ended"
        ? "Ended"
        : "Online";

  const statusColor =
    sessionStatus === "online" ? "#21C16B" : "#9CA3AF";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-row items-center px-4 py-2">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => router.back()}
          className="h-10 w-10 items-center justify-center"
        >
          <Ionicons name="chevron-back" size={28} color="#0D132B" />
        </TouchableOpacity>

        <View className="ml-1 flex-1">
          <Text className="text__h3">AI Teacher</Text>
          <View className="mt-0.5 flex-row items-center">
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: statusColor,
                marginRight: 6,
              }}
            />
            <Text
              className="text__body-sm"
              style={{ color: statusColor, fontFamily: "Poppins-Medium" }}
            >
              {statusLabel}
            </Text>
          </View>
          <Text className="text__caption mt-0.5" numberOfLines={1}>
            {language.flagEmoji} {language.name} · {lesson.title}
          </Text>
        </View>

        <View className="flex-row items-center gap-2">
          <View className="h-9 w-9 items-center justify-center rounded-full bg-surface">
            <Ionicons name="videocam-outline" size={18} color="#0D132B" />
          </View>

          <View className="flex-row items-center rounded-full bg-[#F3EEFF] px-2.5 py-1.5">
            <Ionicons name="flash" size={14} color="#6C4EF5" />
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 13,
                color: "#6C4EF5",
                marginLeft: 4,
              }}
            >
              {lesson.xpReward}
            </Text>
          </View>

          <View>
            <Image
              source={{ uri: imageUris.studentAvatar }}
              style={{ width: 36, height: 36, borderRadius: 18 }}
              contentFit="cover"
            />
            <View
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: "#FF8A00",
                borderWidth: 2,
                borderColor: "#FFFFFF",
              }}
            />
          </View>
        </View>
      </View>

      <View className="mx-4 mt-1 flex-1 overflow-hidden rounded-3xl">
        <Image
          source={{ uri: imageUris.teacherRoom }}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
          blurRadius={Platform.OS === "ios" ? 10 : 0}
        />
        <View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: "rgba(13, 19, 43, 0.18)" },
          ]}
        />

        {cameraOn ? (
          <View
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 78,
              height: 104,
              borderRadius: 14,
              overflow: "hidden",
              borderWidth: 2,
              borderColor: "#FFFFFF",
            }}
          >
            <Image
              source={{ uri: imageUris.studentAvatar }}
              style={{ width: "100%", height: "100%" }}
              contentFit="cover"
            />
          </View>
        ) : null}

        <View className="flex-1 items-center justify-center px-6">
          <Image
            source={images.mascotWelcome}
            style={{ width: 220, height: 220 }}
            contentFit="contain"
          />
        </View>

        <View className="px-4 pb-4">
          <View
            className="rounded-2xl bg-white px-4 py-3"
            style={cardShadow}
          >
            <View className="flex-row items-start">
              <View className="flex-1 pr-3">
                <Text className="text__body-md">{teacherMessage}</Text>
              </View>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Replay teacher audio"
                className="h-9 w-9 items-center justify-center rounded-full bg-[#EAF2FF]"
              >
                <Ionicons name="volume-high" size={18} color="#4D8BFF" />
              </Pressable>
            </View>
          </View>

          {subtitlesOn && subtitleLines.length > 0 ? (
            <View className="mt-3 rounded-xl bg-black/45 px-4 py-2.5">
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 13,
                  color: "#FFFFFF",
                  textAlign: "center",
                }}
              >
                {subtitleLines[subtitleIndex]}
              </Text>
            </View>
          ) : null}
        </View>
      </View>

      <View className="flex-row items-start justify-around px-6 pb-2 pt-5">
        <ControlButton
          label="Camera"
          icon={cameraOn ? "videocam" : "videocam-off"}
          active={cameraOn}
          onPress={() => setCameraOn((value) => !value)}
        />
        <ControlButton
          label="Mic"
          icon={micMuted ? "mic-off" : "mic"}
          active={!micMuted}
          onPress={() => setMicMuted((value) => !value)}
        />
        <ControlButton
          label="Subtitles"
          icon="language"
          active={subtitlesOn}
          onPress={() => setSubtitlesOn((value) => !value)}
        />
        <ControlButton
          label="End Call"
          icon="call"
          iconRotation="135deg"
          danger
          onPress={handleEndCall}
        />
      </View>

      <View className="mx-5 mb-3 rounded-2xl bg-white px-2 py-4" style={cardShadow}>
        <View className="flex-row">
          <View className="flex-1 items-center">
            <Text className="text__caption text-text-secondary">Speaking</Text>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 15,
                color: "#21C16B",
                marginTop: 4,
              }}
            >
              Excellent
            </Text>
          </View>

          <View className="w-px bg-border" />

          <View className="flex-1 items-center">
            <Text className="text__caption text-text-secondary">
              Pronunciation
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 15,
                color: "#4D8BFF",
                marginTop: 4,
              }}
            >
              Great
            </Text>
          </View>

          <View className="w-px bg-border" />

          <View className="flex-1 items-center">
            <Text className="text__caption text-text-secondary">Grammar</Text>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 15,
                color: "#6C4EF5",
                marginTop: 4,
              }}
            >
              Good
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
