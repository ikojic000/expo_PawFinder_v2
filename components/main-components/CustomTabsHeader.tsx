import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CustomHeaderProps } from "@/types/main-component-props";

const CustomTabsHeader = ({ title }: CustomHeaderProps) => {
	const insets = useSafeAreaInsets();

	return (
		<View className={"bg-light"}>
			<View
				style={{
					paddingTop: insets.top * 1.25,
				}}
				className={
					"bg-primary rounded-b-pawFinder p-4 mx-2 shadow-pawFinder flex-row justify-between items-center"
				}>
				<Text className={"text-2xl text-light"}>{title}</Text>
			</View>
		</View>
	);
};

export default CustomTabsHeader;
