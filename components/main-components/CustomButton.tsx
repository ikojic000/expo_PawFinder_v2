import React from "react";
import { Text, TouchableOpacity } from "react-native";
import clsx from "clsx";
import { CustomButtonProps } from "@/types/main-component-props";

const CustomButton = ({
	buttonStyle,
	textStyle,
	buttonClassName,
	textClassName,
	onPress,
	children,
	accessibilityLabel,
}: CustomButtonProps) => {
	return (
		<TouchableOpacity
			className={clsx(
				"w-full rounded-pawFinder p-4 bg-accent shadow-pawFinder",
				buttonClassName,
			)}
			activeOpacity={0.8}
			style={buttonStyle}
			onPress={onPress}
			accessibilityLabel={accessibilityLabel || children?.toString()}>
			<Text
				className={clsx(
					"text-center text-light text-lg",
					textClassName,
				)}
				style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
