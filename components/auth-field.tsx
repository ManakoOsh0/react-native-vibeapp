import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  type TextInputProps,
} from "react-native";

type AuthFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
} & Pick<TextInputProps, "keyboardType" | "autoCapitalize" | "autoComplete">;

export function AuthField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  showPasswordToggle = false,
  keyboardType,
  autoCapitalize,
  autoComplete,
}: AuthFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isHidden = secureTextEntry && !isPasswordVisible;

  return (
    <View className="rounded-2xl border border-border bg-background px-4 py-3">
      <Text className="text__caption text-text-secondary">{label}</Text>
      <View className="mt-1 flex-row items-center">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isHidden}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="flex-1 text__body-lg text-text-primary"
          placeholderTextColor="#6B7280"
          style={{ padding: 0 }}
        />
        {showPasswordToggle ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setIsPasswordVisible((visible) => !visible)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={22}
              color="#6B7280"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}
