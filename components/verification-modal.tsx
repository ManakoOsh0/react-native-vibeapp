import { useEffect, useRef } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

type VerificationModalProps = {
  visible: boolean;
  onClose: () => void;
  code: string;
  onChangeCode: (code: string) => void;
  errorMessage?: string;
  isSubmitting?: boolean;
  onVerify: () => void;
};

const CODE_LENGTH = 6;

export function VerificationModal({
  visible,
  onClose,
  code,
  onChangeCode,
  errorMessage,
  isSubmitting = false,
  onVerify,
}: VerificationModalProps) {
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      return () => clearTimeout(timer);
    }

    onChangeCode("");
  }, [visible, onChangeCode]);

  useEffect(() => {
    if (visible && code.length === CODE_LENGTH && !isSubmitting) {
      onVerify();
    }
  }, [code, isSubmitting, onVerify, visible]);

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Pressable
          onPress={onClose}
          style={{
            flex: 1,
            backgroundColor: "rgba(13, 19, 43, 0.45)",
            justifyContent: "center",
            paddingHorizontal: 24,
          }}
        >
          <Pressable
            onPress={(event) => event.stopPropagation()}
            className="rounded-3xl bg-background px-6 py-8"
          >
            <Text className="text__h3 text-center">Check your email</Text>
            <Text className="text__body-md mt-3 text-center text-text-secondary">
              We sent a verification code to your email. Enter the 6-digit code to
              continue.
            </Text>
            {errorMessage ? (
              <Text className="text__body-sm mt-4 text-center text-error">
                {errorMessage}
              </Text>
            ) : null}

            <Pressable
              onPress={() => inputRef.current?.focus()}
              className="mt-8 flex-row justify-center gap-2.5"
            >
              {Array.from({ length: CODE_LENGTH }, (_, index) => {
                const digit = code[index] ?? "";
                const isActive = index === code.length;

                return (
                  <View
                    key={index}
                    className={`h-14 w-11 items-center justify-center rounded-xl border ${
                      isActive ? "border-lingua-purple" : "border-border"
                    } bg-surface`}
                  >
                    <Text className="text__h3">{digit}</Text>
                  </View>
                );
              })}
            </Pressable>

            <TextInput
              ref={inputRef}
              value={code}
              onChangeText={(value) => {
                const digitsOnly = value.replace(/\D/g, "").slice(0, CODE_LENGTH);
                onChangeCode(digitsOnly);
              }}
              keyboardType="number-pad"
              maxLength={CODE_LENGTH}
              autoComplete="one-time-code"
              textContentType="oneTimeCode"
              style={{
                position: "absolute",
                opacity: 0,
                height: 1,
                width: 1,
              }}
            />
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}
