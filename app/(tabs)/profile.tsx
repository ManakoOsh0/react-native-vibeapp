import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text__h2">Profile</Text>
        <Text className="text__body-md mt-2 text-center text-text-secondary">
          Your profile and settings will appear here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
