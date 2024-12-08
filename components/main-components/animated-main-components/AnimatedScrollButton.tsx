import React from "react";
import { TouchableOpacity } from "react-native";
import { AnimatedScrollButtonProps } from "@/types/main-component-props";
import Animated, {
	Extrapolation,
	interpolate,
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const AnimatedScrollButton = ({
	scrollOffset,
	triggerDistance,
	scrollToTop,
}: AnimatedScrollButtonProps) => {
	const animatedButtonStyle = useAnimatedStyle(() => {
		const translateX = interpolate(
			scrollOffset.value,
			[0, triggerDistance], // Adjust this range based on your needs
			[100, 0], // Move from right to visible position
			Extrapolation.CLAMP,
		);

		const opacity = interpolate(
			scrollOffset.value,
			[0, triggerDistance],
			[0, 1], // Fade in the button
			Extrapolation.CLAMP,
		);

		return {
			transform: [{ translateX: withTiming(translateX) }],
			opacity: withTiming(opacity),
		};
	});

	return (
		<Animated.View
			style={[
				{
					position: "absolute",
					bottom: 80,
					right: 8,
				},
				animatedButtonStyle,
			]}>
			<TouchableOpacity
				onPress={scrollToTop}
				activeOpacity={0.8}
				className={"rounded-full bg-primary p-3 shadow-pawFinder"}>
				<Ionicons
					name={"chevron-up"}
					size={24}
					color={Colors.theme.light}
				/>
			</TouchableOpacity>
		</Animated.View>
	);
};

export default AnimatedScrollButton;
