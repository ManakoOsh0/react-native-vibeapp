import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text__h2">Chat</Text>
        <Text className="text__body-md mt-2 text-center text-text-secondary">
          Chat with your AI tutor will appear here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
