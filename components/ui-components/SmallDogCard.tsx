import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SmallDogCardProps } from "@/types/ui-component-props";

const SmallDogCard = ({ dog }: SmallDogCardProps) => {
	const handleCardPress = () =>
		console.log("SmallDogCard pressed -> " + dog?.id);

	return (
		<View
			className={
				"h-[150px] aspect-[3/4] shadow-pawFinder rounded-pawFinder"
			}>
			<TouchableOpacity
				onPress={handleCardPress}
				activeOpacity={0.8}>
				<Image
					className={
						"rounded-pawFinder h-full w-full shadow-pawFinder"
					}
					source={{ uri: dog?.image?.url }}
					resizeMode={"cover"}
				/>
				<Text
					className={
						"font-bold  text-light absolute bottom-0 left-0 mx-4 my-2"
					}>
					{dog?.name}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SmallDogCard;
