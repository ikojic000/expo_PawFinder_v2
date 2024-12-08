import AnimatedFlatList from "@/components/main-components/animated-main-components/AnimatedFlatList";
import AnimatedScrollButton from "@/components/main-components/animated-main-components/AnimatedScrollButton";
import MainContainer from "@/components/main-components/MainContainer";
import CityBadge from "@/components/ui-components/CityBadge";
import DogAdoptionCard from "@/components/ui-components/DogAdoptionCard";
import SmallDogCard from "@/components/ui-components/SmallDogCard";
import Cities from "@/constants/Cities";
import Colors from "@/constants/Colors";
import Dogs from "@/constants/Dogs";
import FeaturedDogs from "@/constants/FeaturedDogs";
import useScrollList from "@/hooks/useScrollList";
import { City, Dog } from "@/types/models";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useMemo, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const ShelterAdoptionPage = () => {
	const [dogList, setDogList] = useState<Dog[]>([]);
	const memoDogList = useMemo(() => dogList, [dogList]);
	const [cityList, setCityList] = useState<City[]>();
	const memoCityList = useMemo(() => cityList, [cityList]);
	const [featuredDogList, setFeaturedDogList] = useState<Dog[]>([]);
	const memoFeaturedDogList = useMemo(
		() => featuredDogList,
		[featuredDogList],
	);
	const [selectedCity, setSelectedCity] = useState<City>({
		id: 1,
		name: "Zadar",
	});

	const [heartIcons, setHeartIcons] = useState<{
		[key: number]: "heart" | "hearto";
	}>({});

	const [isGridLayout, setIsGridLayout] = useState(false);

	const [targetScrollPosition, setTargetScrollPosition] = useState(0);
	const scrollState = useScrollList();
	// const scrollState = useScrollList("homePage");

	/**
	 * When the ShelterAdoptionPage component is focused, we need to initialize the heart icons for all dogs.
	 * This means we need to create an object with all dogIds as keys and the value for each key is "hearto".
	 * This is done by using the useMemo hook to memoize the array of dogs and the reduce function to create the object.
	 * The resulting object is then spread into the heartIcons state.
	 * This is necessary because we use the heartIcons state to toggle the heart icon for a dog in
	 * the DogAdoptionCard component. The heart icon is displayed when the dog is liked and it is not displayed
	 * when the dog is not liked. When the user clicks on the heart icon, we toggle the heart icon state by
	 * changing the value of the heartIcons state from "hearto" to "heart" or vice versa.
	 * The heartIcons state is also used to animate the heart icon when it is clicked.
	 * The animation is a pulsing effect that is triggered when the heart icon is clicked.
	 * The pulsing effect is achieved by using the Animated library and the withRepeat and withTiming functions.
	 * The withRepeat function is used to repeat the animation the specified number of times and the withTiming
	 * function is used to animate the scale value from its current value to 1.3 over a duration of 200ms.
	 * The third argument, true, will reverse the animation after each iteration, creating an in-out effect.
	 */
	useFocusEffect(
		useCallback(() => {
			console.log("ShelterAdoption tab focused, fetching data");
			setCityList(Cities);
			setDogList(Dogs);
			setFeaturedDogList(FeaturedDogs);

			// scrollState.scrollToTop();

			return () => {
				console.log("ShelterAdoption tab unfocused");
			};
		}, []),
	);

	/**
	 * When the ShelterAdoptionPage component is focused, we need to initialize the heart icons for all dogs.
	 * This means we need to create an object with all dogIds as keys and the value for each key is "hearto".
	 * This is done by using the useMemo hook to memoize the array of dogs and the reduce function to create the object.
	 * The resulting object is then spread into the heartIcons state.
	 * This is necessary because we use the heartIcons state to toggle the heart icon for a dog in the DogAdoptionCard component.
	 * If we don't initialize the heart icons, the component will not render correctly.
	 */
	useFocusEffect(
		useCallback(() => {
			console.log("Initializing heart icons for dogs");
			const initialHeartIcons = memoDogList.reduce(
				(acc, dog) => {
					/**
					 * For each dog in the memoized list of dogs, we create a new entry in the object with the dogId as key
					 * and the value is "hearto", which is the initial state of the heart icon.
					 */
					acc[dog.id] = "hearto";

					return acc;
				},
				{} as { [key: number]: "heart" | "hearto" },
			);
			setHeartIcons(initialHeartIcons);
		}, [memoDogList]),
	);

	/**
	 * This function toggles the heart icon for a dog.
	 * It takes the dogId as an argument and toggles the heart icon for that dog.
	 * The heart icon is represented by a string, either "heart" or "hearto".
	 * When the function is called, it updates the heartIcons object by spreading the previous state
	 * and updating the value for the given dogId with the opposite value of what it was previously.
	 * This way, we can easily toggle the heart icon for a dog.
	 */
	const toggleHeartIcon = useCallback((dogId: number) => {
		setHeartIcons((prev) => ({
			...prev,
			[dogId]: prev[dogId] === "heart" ? "hearto" : "heart",
		}));
	}, []);

	/**
	 * This function is called whenever a user selects a city from the CityBadge component.
	 * It takes the selected city as an argument and updates the selectedCity state with it.
	 * It's used to filter the dog list based on the city that the user selected.
	 * When the user selects a city, we update the selectedCity state with the selected city.
	 * This way, we can filter the dog list based on the selected city.
	 */
	const handleCitySelect = async (city: City) => {
		setSelectedCity(city);
	};

	const extractDogKey = useCallback((item: Dog) => item.id.toString(), []);

	const extractFeaturedDogKey = useCallback(
		(item: Dog) => item.id.toString(),
		[],
	);

	const extractCityKey = useCallback((item: City) => item.id.toString(), []);

	const renderDog = useCallback(
		({ item, index }: { item: Dog; index: number }) => (
			<DogAdoptionCard
				dog={item}
				heartIcon={heartIcons[item.id] || "hearto"}
				toggleHeartIcon={toggleHeartIcon}
				isGridLayout={isGridLayout}
				itemIndex={index}
			/>
		),
		[heartIcons, toggleHeartIcon, isGridLayout],
	);

	const renderFeaturedDog = useCallback(
		({ item }: { item: Dog }) => <SmallDogCard dog={item} />,
		[],
	);

	const renderCity = useCallback(
		({ item }: { item: City }) => (
			<CityBadge
				city={item}
				isSelected={item.id === selectedCity.id} // Pass selected state
				onSelect={() => handleCitySelect(item)} // Handle badge click
			/>
		),
		[selectedCity.id],
	);

	const toggleLayout = () => {
		setIsGridLayout((prev) => !prev);
	};

	const onLayout = (event: any) => {
		const { height } = event.nativeEvent.layout;
		setTargetScrollPosition(height);
	};

	// Header content for the main FlatList
	const renderListHeader = () => (
		<View>
			<View className={"flex-row justify-between items-center m-4"}>
				<Text className={"text-gray font-thin"}>Šapice dana</Text>
			</View>
			<Animated.View style={scrollState.headerAnimatedStyle}>
				<FlatList
					data={memoFeaturedDogList}
					renderItem={renderFeaturedDog}
					ItemSeparatorComponent={() => <View className="w-8" />}
					keyExtractor={extractFeaturedDogKey}
					showsHorizontalScrollIndicator={false}
					horizontal={true}
					contentContainerStyle={{
						flexDirection: "row",
						backgroundColor: Colors.theme.primary200,
						paddingVertical: 16,
						paddingHorizontal: 8,
					}}
					className={"shadow-pawFinder"}
				/>
			</Animated.View>
			<FlatList
				data={memoCityList}
				renderItem={renderCity}
				keyExtractor={extractCityKey}
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				contentContainerStyle={{
					flexDirection: "row",
					marginTop: 16,
				}}
			/>
			<View
				onLayout={onLayout}
				className={"flex-row justify-between items-center m-4"}>
				<Text className={"text-gray font-thin"}>
					Odaberite grad i udomite svog najboljeg prijatelja
				</Text>
				<TouchableOpacity
					className={"bg-light rounded-[2px]"}
					activeOpacity={0.8}
					onPress={toggleLayout}>
					<Ionicons
						name={isGridLayout ? "list-outline" : "grid-outline"}
						size={24}
						color={Colors.theme.gray}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);

	return (
		<GestureHandlerRootView>
			<MainContainer>
				<AnimatedFlatList
					data={memoDogList}
					renderItem={renderDog}
					keyExtractor={extractDogKey}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					numColumns={isGridLayout ? 2 : 1}
					key={isGridLayout ? "grid" : "list"}
					columnWrapperStyle={
						isGridLayout
							? { justifyContent: "space-around" }
							: undefined
					}
					ListHeaderComponent={renderListHeader}
					ListFooterComponent={() => <View className="h-16" />}
					onScroll={scrollState.scrollHandler}
					ref={scrollState.mainListRef}
					scrollEventThrottle={16} // This makes scroll event updates smoother (optional)
				/>
				<AnimatedScrollButton
					scrollOffset={scrollState.scrollOffset}
					triggerDistance={200}
					scrollToTop={scrollState.scrollToTop}
				/>
			</MainContainer>
		</GestureHandlerRootView>
	);
};

export default ShelterAdoptionPage;
