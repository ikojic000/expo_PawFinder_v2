import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CityBadgeProps } from "@/types/ui-component-props";

const CityBadge = ({ city, isSelected, onSelect }: CityBadgeProps) => {
	return (
		<TouchableOpacity
			onPress={onSelect}
			activeOpacity={0.8}>
			<View
				className={`${isSelected ? "bg-accent" : "bg-light"} rounded-full mx-4 justify-center items-center`}>
				<Text
					className={`${isSelected ? "text-light" : "text-gray"} text-sm font-bold px-8 py-2`}>
					{city.name}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CityBadge;
