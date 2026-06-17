import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import { useEffect } from "react";
import { Pressable, Text, View, useWindowDimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PURPLE = "#6C4EF5";
const INACTIVE_COLOR = "#9CA3AF";
const BORDER_COLOR = "#E5E7EB";
const CIRCLE_SIZE = 52;
const TAB_BAR_HEIGHT = 64;

type TabConfig = {
  name: string;
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  activeIcon: keyof typeof Ionicons.glyphMap;
};

const TABS: TabConfig[] = [
  { name: "index", label: "Home", icon: "home-outline", activeIcon: "home" },
  { name: "learn", label: "Learn", icon: "book-outline", activeIcon: "book" },
  {
    name: "ai-teacher",
    label: "AI Teacher",
    icon: "school-outline",
    activeIcon: "school",
  },
  {
    name: "chat",
    label: "Chat",
    icon: "chatbubble-outline",
    activeIcon: "chatbubble",
  },
  {
    name: "profile",
    label: "Profile",
    icon: "person-outline",
    activeIcon: "person",
  },
];

function getTabConfig(routeName: string, index: number): TabConfig {
  return TABS.find((tab) => tab.name === routeName) ?? TABS[index];
}

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const tabCount = state.routes.length;
  const tabWidth = width / tabCount;

  const translateX = useSharedValue(
    state.index * tabWidth + (tabWidth - CIRCLE_SIZE) / 2,
  );

  useEffect(() => {
    translateX.value = withSpring(
      state.index * tabWidth + (tabWidth - CIRCLE_SIZE) / 2,
      {
        damping: 20,
        stiffness: 200,
        mass: 0.8,
      },
    );
  }, [state.index, tabWidth, translateX]);

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: BORDER_COLOR,
        paddingBottom: Math.max(insets.bottom, 8),
      }}
    >
      <View style={{ height: TAB_BAR_HEIGHT, flexDirection: "row" }}>
        <Animated.View
          pointerEvents="none"
          style={[
            {
              position: "absolute",
              top: 6,
              width: CIRCLE_SIZE,
              height: CIRCLE_SIZE,
              borderRadius: CIRCLE_SIZE / 2,
              backgroundColor: PURPLE,
            },
            circleStyle,
          ]}
        />

        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const tab = getTabConfig(route.name, index);

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
              if (process.env.EXPO_OS === "ios") {
                void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }
            }
          };

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={tab.label}
              onPress={onPress}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
                paddingTop: 6,
              }}
            >
              {isFocused ? (
                <View
                  style={{
                    width: CIRCLE_SIZE,
                    height: CIRCLE_SIZE,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Ionicons name={tab.activeIcon} size={24} color="#FFFFFF" />
                </View>
              ) : (
                <View style={{ alignItems: "center", gap: 4, paddingTop: 2 }}>
                  <Ionicons name={tab.icon} size={24} color={INACTIVE_COLOR} />
                  <Text
                    style={{
                      fontFamily: "Poppins-Medium",
                      fontSize: 10,
                      lineHeight: 12,
                      color: INACTIVE_COLOR,
                      textAlign: "center",
                    }}
                  >
                    {tab.label}
                  </Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
