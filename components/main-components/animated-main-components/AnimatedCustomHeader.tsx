import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, {
	Extrapolation,
	interpolate,
	useAnimatedStyle,
} from "react-native-reanimated";
import { useScroll } from "@/context/ScrollContext";
import { AnimatedCustomHeaderProps } from "@/types/main-component-props";

const AnimatedCustomHeader = ({ title }: AnimatedCustomHeaderProps) => {
	const insets = useSafeAreaInsets();
	const { scrollOffset } = useScroll();

	// Now we check if scrollOffset exists, otherwise use a default value of 0
	const currentOffset = scrollOffset?.value ?? 0;

	// Animated style for the text (animating fontSize and opacity)
	const animatedTextStyle = useAnimatedStyle(() => {
		const fontSize = interpolate(
			scrollOffset.value,
			[0, 100], // Range of scrolling
			[24, 20], // Text size reducing from 24px to 20px
			Extrapolation.CLAMP,
		);

		const opacity = interpolate(
			scrollOffset.value,
			[100, 120], // Range of scrolling where text fades out
			[1, 0], // Fade out effect
			Extrapolation.CLAMP,
		);

		return {
			fontSize,
			opacity,
		};
	});

	// Animated style for the inner View (animating paddingTop and paddingBottom)
	const animatedInnerStyle = useAnimatedStyle(() => {
		const paddingTop = interpolate(
			scrollOffset.value, // Scroll offset from the list
			[0, 150], // Range of scrolling
			[insets.top * 1.25, insets.top * 0.5], // Padding changes from larger to smaller
			Extrapolation.CLAMP,
		);

		const paddingBottom = interpolate(
			scrollOffset.value,
			[0, 150], // Range of scrolling
			[16, 0], // PaddingBottom reduces from 16px (py-4) to 0px (py-0)
			Extrapolation.CLAMP,
		);

		return {
			paddingTop,
			paddingBottom,
		};
	});

	return (
		<Animated.View className={"bg-transparent"}>
			<Animated.View
				className={
					"bg-primary rounded-b-pawFinder px-4 py-0 mx-2 shadow-pawFinder flex-row justify-between items-center"
				}
				style={animatedInnerStyle}>
				<Animated.Text
					style={animatedTextStyle}
					className={"text-light"}>
					{title}
				</Animated.Text>
			</Animated.View>
		</Animated.View>
	);
};

export default AnimatedCustomHeader;
