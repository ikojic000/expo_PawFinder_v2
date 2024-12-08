import React, { useCallback, useEffect, useState } from "react";
import { View, ViewToken } from "react-native";
import MainContainer from "@/components/main-components/MainContainer";
import { Conversation } from "@/types/models";
import { useFocusEffect } from "expo-router";
import useScrollList from "@/hooks/useScrollList";
import { useSharedValue } from "react-native-reanimated";
import Loader from "@/components/main-components/Loader";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AnimatedScrollButton from "@/components/main-components/animated-main-components/AnimatedScrollButton";
import AnimatedFlatList from "@/components/main-components/animated-main-components/AnimatedFlatList";
import MockConversations from "@/constants/MockConversations";
import ConversationCard from "@/components/ui-components/ConversationCard";

const Conversations = () => {
	const [conversationList, setConversationList] = useState<Conversation[]>(
		[],
	);
	const [loading, setLoading] = useState(true); // Initially loading is true
	const [refreshing, setRefreshing] = useState(false); // State for pull-to-refresh
	const scrollState = useScrollList();
	const viewableItems = useSharedValue<ViewToken[]>([]);

	useFocusEffect(() => {
		console.log("Conversations focused");
		scrollState.resetScrollOffset();
		scrollState.scrollToTop();
	});

	const loadConversations = useCallback(async () => {
		return new Promise<void>((resolve) => {
			setTimeout(() => {
				setConversationList(MockConversations); // Simulate API call
				resolve();
			}, 3 * 1000); // Simulated delay for loading
		});
	}, []);

	useEffect(() => {
		console.log("Conversations mounted");
		loadConversations().then(() => {
			console.log("Conversations loaded");
			setLoading(false);
		}); // Call the loading function on mount

		return () => {
			console.log("Conversations unmounted");
		};
	}, [loadConversations]);

	const onRefresh = useCallback(() => {
		setRefreshing(true);
		loadConversations().then(() => {
			console.log("Data refreshed");
			setRefreshing(false);
		});
	}, [loadConversations]);

	const renderConversation = useCallback(
		({ item }: { item: Conversation }) => (
			<ConversationCard
				conversation={item}
				viewableItems={viewableItems}
			/>
		),
		[viewableItems],
	);

	const extractConversationKey = useCallback(
		(item: Conversation) => item.id.toString(),
		[],
	);

	if (loading && !refreshing) {
		return (
			<MainContainer>
				{/*<Tabs.Screen*/}
				{/*	options={{*/}
				{/*		header: () => (*/}
				{/*			<AnimatedCustomHeader*/}
				{/*				title="Razgovori"*/}
				{/*				scrollOffset={scrollState.scrollOffset}*/}
				{/*			/>*/}
				{/*		),*/}
				{/*	}}*/}
				{/*/>*/}
				<View className="flex-1 justify-center items-center ">
					<Loader tabBarVisible={true} />
				</View>
			</MainContainer>
		);
	}

	return (
		<GestureHandlerRootView>
			<MainContainer>
				{/*<Tabs.Screen*/}
				{/*	options={{*/}
				{/*		header: () => (*/}
				{/*			<AnimatedCustomHeader*/}
				{/*				title="Razgovori"*/}
				{/*				// scrollOffset={scrollState.scrollOffset}*/}
				{/*			/>*/}
				{/*		),*/}
				{/*	}}*/}
				{/*/>*/}
				<AnimatedFlatList
					ref={scrollState.mainListRef}
					data={conversationList}
					renderItem={renderConversation}
					keyExtractor={extractConversationKey}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					ItemSeparatorComponent={() => <View className="h-4" />}
					ListFooterComponent={() => <View className="h-[7rem]" />}
					onScroll={scrollState.scrollHandler}
					className={"p-4"}
					onViewableItemsChanged={({ viewableItems: vItems }) => {
						viewableItems.value = vItems;
					}}
					// refreshControl={
					// 	<RefreshControl
					// 		refreshing={refreshing}
					// 		onRefresh={onRefresh}
					// 		tintColor={"#0000"}
					// 	/>
					// }
				/>
				<AnimatedScrollButton
					scrollOffset={scrollState.scrollOffset}
					triggerDistance={50}
					scrollToTop={scrollState.scrollToTop}
				/>
			</MainContainer>
		</GestureHandlerRootView>
	);
};

export default Conversations;
