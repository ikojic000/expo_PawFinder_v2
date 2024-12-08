import React from "react";
import {
	Animated,
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import Reanimated, {
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withTiming,
} from "react-native-reanimated";
import Colors from "@/constants/Colors";
import { SwipeableRowProps } from "@/types/main-component-props";

const SwipeableRow = ({
	children,
	onArchive,
	onDelete,
	customClassName,
	customStyle,
}: SwipeableRowProps) => {
	const deviceWidth = Dimensions.get("window").width;
	const shake = useSharedValue(0);

	const shakeIconStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: withRepeat(
						withTiming(shake.value, { duration: 100 }),
						6,
						true,
					), // 6 times back and forth
				},
			],
		};
	});

	const triggerShake = () => {
		shake.value = 5; // Sets the shake value
		setTimeout(() => {
			shake.value = 0; // Resets the value after animation
		}, 600); // Reset after animation duration
	};

	const renderLeftActions = (
		progress: Animated.AnimatedInterpolation<number>, // Specify number as the output type
		dragX: Animated.AnimatedInterpolation<number>,
	) => {
		const trans = dragX.interpolate({
			inputRange: [0, 50, 100, 101],
			outputRange: [-20, 0, 0, 1],
		});

		return (
			<TouchableOpacity
				style={[styles.leftAction, customStyle?.leftAction]}
				className={"rounded-pawFinder"}
				activeOpacity={0.8}
				onPress={onArchive}>
				<Animated.Text
					style={[styles.actionText, customStyle?.actionText]}>
					Archive
				</Animated.Text>
			</TouchableOpacity>
		);
	};

	const renderRightAction = (
		text: string,
		color: string,
		x: number,
		progress: Animated.AnimatedInterpolation<number>, // Specify number as the output type
		onPress: () => void,
		icon?: JSX.Element, // Optional icon component, such as Ionicons
	) => {
		const trans = progress.interpolate({
			inputRange: [0, 1],
			outputRange: [x, 0],
		});

		return (
			<Animated.View
				style={{ flex: 1, transform: [{ translateX: trans }] }}>
				<TouchableOpacity
					style={[
						styles.rightAction,
						{ backgroundColor: color },
						customStyle?.rightAction,
					]}
					className={"rounded-pawFinder"}
					activeOpacity={0.8}
					onPress={() => {
						onPress();
						triggerShake(); // Trigger the shake when the button is pressed
					}}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-around",
						}}>
						<Text
							style={[
								styles.actionText,
								customStyle?.actionText,
							]}>
							{text}
						</Text>
						{icon && (
							<Reanimated.View
								style={[{ marginLeft: 8 }, shakeIconStyle]}>
								{icon}
							</Reanimated.View>
						)}
					</View>
				</TouchableOpacity>
			</Animated.View>
		);
	};

	const renderRightActions = (
		progress: Animated.AnimatedInterpolation<number>,
	) => (
		<View
			style={{
				width: deviceWidth / 2,
				flexDirection: "row",
			}}>
			{renderRightAction(
				"Delete",
				Colors.theme.warning,
				128,
				progress,
				onDelete,
				<Ionicons
					name="trash-outline"
					size={20}
					color="white"
				/>,
			)}
		</View>
	);

	return (
		<Swipeable
			friction={2}
			leftThreshold={30}
			rightThreshold={40}
			renderLeftActions={renderLeftActions}
			renderRightActions={renderRightActions}>
			<View
				className={customClassName + "bg-warning"}
				style={customStyle?.container}>
				{children}
			</View>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	leftAction: {
		flex: 1,
		backgroundColor: Colors.theme.primary,
		justifyContent: "center",
		borderRadius: 10,
	},
	actionText: {
		color: "white",
		fontSize: 16,
		backgroundColor: "transparent",
		padding: 16,
	},
	rightAction: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default SwipeableRow;
