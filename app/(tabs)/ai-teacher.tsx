import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AiTeacherScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text__h2">AI Teacher</Text>
        <Text className="text__body-md mt-2 text-center text-text-secondary">
          Video lessons with your AI teacher will appear here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
