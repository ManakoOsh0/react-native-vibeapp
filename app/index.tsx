import { images } from "@/constants/images";
import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ColorSwatchProps = {
  name: string;
  hex: string;
  className: string;
};

function ColorSwatch({ name, hex, className }: ColorSwatchProps) {
  return (
    <View className="flex-1 min-w-[45%] gap-2">
      <View className={`h-16 rounded-xl ${className}`} />
      <Text className="text__caption">{name}</Text>
      <Text className="text__caption uppercase">{hex}</Text>
    </View>
  );
}

type TypographyRowProps = {
  label: string;
  usage: string;
  className: string;
};

function TypographyRow({ label, usage, className }: TypographyRowProps) {
  return (
    <View className="gap-1 border-b border-border pb-4">
      <Text className={className}>{label}</Text>
      <Text className="text__caption">{usage}</Text>
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="gap-8 p-6 pb-12"
      >
        {/* Brand */}
        <View className="gap-4">
          <Text className="text__h2">Brand</Text>
          <View className="flex-row items-center gap-3">
            <Image
              source={images.mascotLogo}
              style={{ width: 48, height: 48 }}
              contentFit="contain"
            />
            <Text className="text__logo">lingua</Text>
          </View>
        </View>

        {/* Colors */}
        <View className="gap-4">
          <Text className="text__h2">Colors</Text>

          <Text className="text__h4">Primary</Text>
          <View className="flex-row flex-wrap gap-4">
            <ColorSwatch
              name="Lingua Purple"
              hex="#6C4EF5"
              className="bg-lingua-purple"
            />
            <ColorSwatch
              name="Lingua Deep Purple"
              hex="#5B3BF6"
              className="bg-lingua-deep-purple"
            />
            <ColorSwatch
              name="Lingua Blue"
              hex="#4D8BFF"
              className="bg-lingua-blue"
            />
            <ColorSwatch
              name="Lingua Green"
              hex="#21C16B"
              className="bg-lingua-green"
            />
          </View>

          <Text className="text__h4">Semantic</Text>
          <View className="flex-row flex-wrap gap-4">
            <ColorSwatch name="Success" hex="#21C16B" className="bg-success" />
            <ColorSwatch name="Warning" hex="#FFC800" className="bg-warning" />
            <ColorSwatch name="Streak" hex="#FF8A00" className="bg-streak" />
            <ColorSwatch name="Error" hex="#FF4D4F" className="bg-error" />
            <ColorSwatch name="Info" hex="#4D8BFF" className="bg-info" />
          </View>

          <Text className="text__h4">Neutrals</Text>
          <View className="flex-row flex-wrap gap-4">
            <ColorSwatch
              name="Text / Primary"
              hex="#0D132B"
              className="bg-text-primary"
            />
            <ColorSwatch
              name="Text / Secondary"
              hex="#6B7280"
              className="bg-text-secondary"
            />
            <ColorSwatch name="Border" hex="#E5E7EB" className="bg-border" />
            <ColorSwatch name="Surface" hex="#F6F7FB" className="bg-surface" />
            <ColorSwatch
              name="Background"
              hex="#FFFFFF"
              className="bg-background border border-border"
            />
          </View>
        </View>

        {/* Typography */}
        <View className="gap-4">
          <Text className="text__h2">Typography</Text>
          <Text className="text__body-md text-text-secondary">
            Poppins — modern, geometric sans-serif typeface
          </Text>

          <View className="gap-4">
            <TypographyRow
              label="H1 — Page / Screen Title"
              usage="32px · Bold · 1.2"
              className="text__h1"
            />
            <TypographyRow
              label="H2 — Section Title"
              usage="24px · SemiBold · 1.3"
              className="text__h2"
            />
            <TypographyRow
              label="H3 — Card / Module Title"
              usage="20px · SemiBold · 1.3"
              className="text__h3"
            />
            <TypographyRow
              label="H4 — Subheading"
              usage="16px · Medium · 1.4"
              className="text__h4"
            />
            <TypographyRow
              label="Body Large — Important content"
              usage="16px · Regular · 1.6"
              className="text__body-lg"
            />
            <TypographyRow
              label="Body Medium — Body text"
              usage="14px · Regular · 1.6"
              className="text__body-md"
            />
            <TypographyRow
              label="Body Small — Supporting text"
              usage="13px · Regular · 1.6"
              className="text__body-sm"
            />
            <TypographyRow
              label="Caption — Labels, meta text"
              usage="11px · Regular · 1.4"
              className="text__caption"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
