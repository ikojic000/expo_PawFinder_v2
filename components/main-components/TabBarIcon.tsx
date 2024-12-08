import React from "react";
import { Image, StyleSheet } from "react-native";
import { TabBarIconProps } from "@/types/main-component-props";
import { FontAwesome5, FontAwesome6, Ionicons } from "@expo/vector-icons";

const TabBarIcon = ({
	activeName,
	inactiveName,
	title,
	color,
	focused,
	type,
}: TabBarIconProps) => {
	const iconName = focused ? activeName : inactiveName;

	return type === "custom" ? (
		<Image
			source={
				focused
					? require("../../assets/icons/pets-fill.png") // Focused state image
					: require("../../assets/icons/pets-outline.png") // Unfocused state image
			}
			style={styles.icon}
		/>
	) : type === "fa5" ? (
		<FontAwesome5
			name={iconName}
			size={20}
			color={color}
		/>
	) : type === "fa6" ? (
		<FontAwesome6
			name={iconName}
			size={20}
			color={color}
			// style={styles.icon}
		/>
	) : type === "ionicons" ? (
		<Ionicons
			name={iconName}
			size={22}
			color={color}
		/>
	) : null;
};

const styles = StyleSheet.create({
	icon: {
		width: 24,
		height: 24,
	},
});

export default TabBarIcon;
