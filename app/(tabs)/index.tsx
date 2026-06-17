import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text__h2">Home</Text>
        <Text className="text__body-md mt-2 text-center text-text-secondary">
          Home screen coming soon.
        </Text>
      </View>
    </SafeAreaView>
  );
}
