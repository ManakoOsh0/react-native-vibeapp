import { languages } from "@/data/languages";
import { images } from "@/constants/images";
import type { Language, LanguageCode } from "@/types/learning";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Stack, router } from "expo-router";
import { useMemo, useState } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SCREEN_WIDTH = Dimensions.get("window").width;
const EARTH_IMAGE_SIZE = SCREEN_WIDTH;
/** Bottom slice of the square asset — keeps landmarks + globe, trims black sky. */
const EARTH_FOOTER_HEIGHT = Math.round(EARTH_IMAGE_SIZE * 0.7);

function EarthFooter() {
  return (
    <View
      pointerEvents="none"
      style={{
        height: EARTH_FOOTER_HEIGHT,
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Image
        source={images.earth}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: EARTH_IMAGE_SIZE,
          height: EARTH_IMAGE_SIZE,
        }}
        contentFit="fill"
      />
    </View>
  );
}

type LanguageOptionProps = {
  language: Language;
  isSelected: boolean;
  onPress: () => void;
};

function LanguageOption({ language, isSelected, onPress }: LanguageOptionProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className={`flex-row items-center rounded-2xl px-4 py-3.5 ${
        isSelected
          ? "border-2 border-lingua-purple bg-[#EDE8FE]"
          : "border border-border bg-background"
      }`}
    >
      <View className="h-11 w-11 items-center justify-center rounded-full bg-surface">
        <Text className="text-[22px]">{language.flagEmoji}</Text>
      </View>

      <View className="ml-3 flex-1 gap-0.5">
        <Text className="text__h4">{language.name}</Text>
        <Text className="text__body-sm text-text-secondary">{language.tagline}</Text>
      </View>

      {isSelected ? (
        <View className="h-7 w-7 items-center justify-center rounded-full bg-lingua-purple">
          <Ionicons name="checkmark" size={18} color="#FFFFFF" />
        </View>
      ) : (
        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
      )}
    </TouchableOpacity>
  );
}

export default function SelectLanguageScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedId, setSelectedId] = useState<LanguageCode | null>(
    languages[0]?.id ?? null,
  );

  const filteredLanguages = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return languages;
    }

    return languages.filter(
      (language) =>
        language.name.toLowerCase().includes(query) ||
        language.nativeName.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const handleConfirm = () => {
    if (!selectedId) {
      return;
    }

    router.back();
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <SafeAreaView
          edges={["top", "left", "right"]}
          style={{ flex: 1, backgroundColor: "#FFFFFF" }}
        >
          <View className="flex-1">
            <View className="px-6 pt-2">
              <View className="relative items-center justify-center py-2">
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => router.back()}
                  className="absolute left-0 h-10 w-10 items-center justify-center"
                >
                  <Ionicons name="chevron-back" size={28} color="#0D132B" />
                </TouchableOpacity>
                <Text className="text__h4">Choose a language</Text>
              </View>

              <View className="mt-4 flex-row items-center rounded-2xl border border-border px-4 py-3">
                <Ionicons name="search" size={20} color="#9CA3AF" />
                <TextInput
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                  placeholder="Search languages"
                  placeholderTextColor="#9CA3AF"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{
                    flex: 1,
                    marginLeft: 10,
                    fontFamily: "Poppins-Regular",
                    fontSize: 14,
                    color: "#0D132B",
                    paddingVertical: 0,
                  }}
                />
              </View>

              <Text className="text__h4 mt-6 mb-3">Popular</Text>
            </View>

            <ScrollView
              className="flex-1 px-6"
              contentContainerClassName="gap-3 pb-4"
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((language) => (
                  <LanguageOption
                    key={language.id}
                    language={language}
                    isSelected={selectedId === language.id}
                    onPress={() => setSelectedId(language.id)}
                  />
                ))
              ) : (
                <View className="items-center py-8">
                  <Text className="text__body-md text-text-secondary">
                    No languages match your search.
                  </Text>
                </View>
              )}
            </ScrollView>

            <View className="bg-background px-6 pb-3 pt-2">
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={handleConfirm}
                disabled={!selectedId}
                className={`flex-row items-center justify-between rounded-2xl bg-lingua-purple px-6 py-4 ${
                  !selectedId ? "opacity-60" : ""
                }`}
              >
                <Text className="text__h4 text-white">Continue</Text>
                <Ionicons name="chevron-forward" size={22} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>

        <EarthFooter />
      </View>
    </>
  );
}
