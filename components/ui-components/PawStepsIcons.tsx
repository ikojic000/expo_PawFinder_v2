import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const PawStepsIcons = () => {
	return (
		<View className={"flex-row justify-between gap-2"}>
			<Ionicons
				name={"paw-sharp"}
				color={Colors.theme.primary}
				size={12}
				style={{
					transform: "rotate(-45deg)",
				}}
			/>
			<Ionicons
				name={"paw-sharp"}
				color={Colors.theme.primary}
				size={12}
				style={{
					transform: "rotate(-45deg)",
					marginBottom: 16,
					marginHorizontal: 8,
				}}
			/>
			<Ionicons
				name={"paw-sharp"}
				color={Colors.theme.primary}
				size={12}
				style={{
					transform: "rotate(-45deg)",
				}}
			/>
		</View>
	);
};

export default PawStepsIcons;
