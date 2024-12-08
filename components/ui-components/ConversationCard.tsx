import React, { useCallback } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SwipeableRow from "@/components/main-components/animated-main-components/SwipeableRow";
import Animated, {
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";
import { ConversationCardProps } from "@/types/ui-component-props";
import Colors from "@/constants/Colors";

const ConversationCard: React.FC<ConversationCardProps> = ({
	conversation,
	viewableItems,
}) => {
	// Define animated styles
	const rStyle = useAnimatedStyle(() => {
		const isVisible = Boolean(
			viewableItems.value
				.filter((item) => item.isViewable)
				.find(
					(viewableItem) => viewableItem.item.id === conversation.id,
				),
		);

		return {
			opacity: withTiming(isVisible ? 1 : 0),
			transform: [
				{
					scale: withTiming(isVisible ? 1 : 0.6),
				},
			],
		};
	}, []);

	const handleArchive = useCallback(() => {
		alert(`Archived conversation ${conversation.id}`);
	}, [conversation.id]);

	const handleFlag = useCallback(() => {
		alert(`Flagged conversation ${conversation.id}`);
	}, [conversation.id]);

	return (
		<Animated.View
			style={[styles.cardContainer, rStyle]}
			className={"shadow-pawFinder justify-center align-middle"}>
			<SwipeableRow
				onArchive={handleArchive}
				onDelete={handleFlag}>
				<View className="flex-row items-center p-4 bg-white rounded-pawFinder">
					<Image
						source={{ uri: conversation.sender.profilePhoto }}
						style={styles.profileImage}
					/>
					<View className="ml-4">
						<Text className="text-lg font-bold text-primary">
							{conversation.sender.fullName}
						</Text>
						<Text className="text-sm text-gray">
							{conversation.messages.lastMessage.content}
						</Text>
						<Text className="text-xs text-gray-400 mt-1">
							{new Date(
								conversation.messages.lastMessage.received_datetime,
							).toLocaleString()}
						</Text>
					</View>
				</View>
			</SwipeableRow>
		</Animated.View>
	);
};

export default ConversationCard;

const styles = StyleSheet.create({
	cardContainer: {
		height: 78,
		width: "100%",
		backgroundColor: Colors.theme.light,
		alignSelf: "center",
		borderRadius: 10,
		// marginTop: 8,
	},
	profileImage: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
});
