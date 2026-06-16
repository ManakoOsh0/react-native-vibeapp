import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

type SocialAuthButtonsProps = {
  onGooglePress?: () => void;
  onFacebookPress?: () => void;
  onApplePress?: () => void;
};

function SocialButton({
  icon,
  iconColor,
  label,
  onPress,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
  label: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className="flex-row items-center justify-center gap-3 rounded-2xl border border-border bg-background px-4 py-3.5"
    >
      <Ionicons name={icon} size={20} color={iconColor} />
      <Text className="text__body-md font-medium text-text-primary">{label}</Text>
    </TouchableOpacity>
  );
}

export function SocialAuthButtons({
  onGooglePress,
  onFacebookPress,
  onApplePress,
}: SocialAuthButtonsProps) {
  return (
    <View className="gap-3">
      <View className="flex-row items-center gap-3">
        <View className="h-px flex-1 bg-border" />
        <Text className="text__caption text-text-secondary">or continue with</Text>
        <View className="h-px flex-1 bg-border" />
      </View>

      <SocialButton
        icon="logo-google"
        iconColor="#4285F4"
        label="Continue with Google"
        onPress={onGooglePress}
      />
      <SocialButton
        icon="logo-facebook"
        iconColor="#1877F2"
        label="Continue with Facebook"
        onPress={onFacebookPress}
      />
      <SocialButton
        icon="logo-apple"
        iconColor="#0D132B"
        label="Continue with Apple"
        onPress={onApplePress}
      />
    </View>
  );
}
