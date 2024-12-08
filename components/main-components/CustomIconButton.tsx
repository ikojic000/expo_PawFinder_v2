import React from "react";
import { TouchableOpacity } from "react-native";
import clsx from "clsx";
import { CustomIconButtonProps } from "@/types/main-component-props";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const CustomIconButton = ({
	buttonStyle,
	iconName,
	iconSize = 24,
	iconColor = Colors.theme.gray,
	buttonClassName,
	onPress,
	accessibilityLabel,
}: CustomIconButtonProps) => {
	return (
		<TouchableOpacity
			className={clsx(
				"rounded-pawFinder shadow-pawFinder flex items-center justify-center p-2",
				buttonClassName,
			)}
			activeOpacity={0.8}
			style={buttonStyle}
			onPress={onPress}
			accessibilityLabel={accessibilityLabel || iconName}>
			<Ionicons
				name={iconName}
				size={iconSize}
				color={iconColor}
			/>
		</TouchableOpacity>
	);
};

export default CustomIconButton;
