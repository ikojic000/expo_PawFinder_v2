import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { DogAdoptionCardProps } from "@/types/ui-component-props";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withTiming,
} from "react-native-reanimated";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import CustomLink from "@/components/main-components/CustomLink";

const DogAdoptionCard = ({
	dog,
	heartIcon,
	toggleHeartIcon,
	isGridLayout,
	itemIndex,
}: DogAdoptionCardProps) => {
	const heartOpacity = useSharedValue(0);
	const heartScale = useSharedValue(1);

	// Define a function to show the heart animation
	// This animation is triggered every time the user clicks on the heart icon
	// It will make the heart icon appear and disappear with a fade-in and fade-out animation
	// The animation will last for 1 second
	const showHeartAnimation = () => {
		// Set the opacity of the heart icon to 1 (fully visible) over a duration of 200 milliseconds
		// This will make the heart icon appear with a fade-in animation
		heartOpacity.value = withTiming(1, { duration: 200 }); // Appear

		// Wait for 1 second (1000 milliseconds) before hiding the heart icon
		// This delay is necessary because we want the animation to last for 1 second
		setTimeout(() => {
			// Set the opacity of the heart icon back to 0 (fully invisible) over another duration of 200 milliseconds
			// This will make the heart icon disappear with a fade-out animation
			heartOpacity.value = withTiming(0, { duration: 200 }); // Disappear
		}, 1000);
	};

	// Handle multiple pulses for the heart icon
	// This function will be called every time the user clicks on the heart icon
	// It will trigger a pulsing animation, which will scale the heart icon out and in 5 times
	// The pulsing animation will last for 1 second (5 pulses at 200ms each)
	const triggerPulse = () => {
		if (heartIcon === "hearto") {
			// Pulse out and in with repeat (5 pulses)
			// The withRepeat function will repeat the animation the specified number of times
			// The withTiming function will animate the scale value from its current value to 1.3
			// over a duration of 200ms. The third argument, true, will reverse the animation
			// after each iteration, creating an in-out effect
			heartScale.value = withRepeat(
				withTiming(1.3, { duration: 200 }), // Pulsate out
				5, // Number of pulses
				true, // Reverse to create in-out effect
			);

			// Ensure scale returns to original size after the pulsing
			// After the pulsing animation has finished (after 1 second), set the scale value
			// back to its original value (1) over a duration of 200ms
			setTimeout(() => {
				heartScale.value = withTiming(1, { duration: 200 });
			}, 1000); // Duration to match the pulse animation time (3 pulses at 200ms each)
		}
	};

	// Style for pulsating heart icon
	// This style will be applied to the heart icon when the user clicks on it
	// It will scale the heart icon out and in 5 times over a duration of 1 second
	// The pulsing animation will last for 1 second (5 pulses at 200ms each)
	// The withRepeat function will repeat the animation the specified number of times
	// The withTiming function will animate the scale value from its current value to 1.3
	// over a duration of 200ms. The third argument, true, will reverse the animation
	// after each iteration, creating an in-out effect
	const pulseIconStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					scale: heartScale.value,
				},
			],
		};
	});

	// Style for animated heart icon
	// This style will be applied to the heart icon when the user clicks on it
	// It will make the heart icon appear and disappear with a fade-in and fade-out animation
	// The animation will last for 1 second
	// The withTiming function will animate the opacity value from its current value to 1
	// over a duration of 200ms. The third argument, true, will reverse the animation
	// after each iteration, creating an in-out effect
	const animatedHeartStyle = useAnimatedStyle(() => ({
		opacity: heartOpacity.value,
	}));

	// Single tap handler
	// This function is called when the user taps once on the dog's image
	// It currently just logs a message to the console
	const singleTapHandler = () => {
		console.log("Single tap detected on Dog details id:", dog.id);
	};

	// Double tap handler
	// This function is called when the user taps twice on the dog's image
	// It currently just logs a message to the console and calls the showHeartAnimation function
	// The showHeartAnimation function will make the heart icon appear and disappear with a fade-in and fade-out animation
	// The animation will last for 1 second
	// The withTiming function will animate the opacity value from its current value to 1
	// over a duration of 200ms. The third argument, true, will reverse the animation
	// after each iteration, creating an in-out effect
	// The triggerPulse function will make the heart icon pulse out and in 5 times over a duration of 1 second
	// The pulsing animation will last for 1 second (5 pulses at 200ms each)
	// The withRepeat function will repeat the animation the specified number of times
	// The withTiming function will animate the scale value from its current value to 1.3
	// over a duration of 200ms. The third argument, true, will reverse the animation
	// after each iteration, creating an in-out effect
	const doubleTapHandler = async () => {
		console.log("Double tap detected on Dog details id:", dog.id);
		toggleHeartIcon(dog.id);
		showHeartAnimation();

		if (heartIcon === "hearto") {
			triggerPulse();
		}
	};

	// We are using the Gesture API from react-native-gesture-handler to detect
	// single taps and double taps on the dog's image. We are using the
	// Simultaneous gesture to detect both single and double taps at the same time.
	// The singleTap gesture will be triggered when the user taps once on the image,
	// and the doubleTap gesture will be triggered when the user taps twice on the image.
	// We are using the maxDelay option to increase the delay between taps for
	// double tap detection. This is because the default delay is 200ms, which is
	// too short for most users. We are also using the numberOfTaps option to
	// specify that we want to detect 2 taps for the double tap gesture.
	//
	// The singleTapHandler function is called when the user taps once on the image,
	// and the doubleTapHandler function is called when the user taps twice on the image.
	// The singleTapHandler function currently just logs a message to the console,
	// and the doubleTapHandler function logs a message to the console and calls
	// the showHeartAnimation function to make the heart icon appear and disappear
	// with a fade-in and fade-out animation.
	const singleTap = Gesture.Tap().onEnd(singleTapHandler).runOnJS(true);

	const doubleTap = Gesture.Tap()
		.maxDelay(500) // Increase the delay between taps for detection
		.numberOfTaps(2)
		.onStart(doubleTapHandler)
		.runOnJS(true);

	const combinedTapGestures = Gesture.Simultaneous(singleTap, doubleTap);

	// Grid Layout
	const renderGridLayout = () => (
		<View
			className={`w-1/2 rounded-pawFinder px-4 mb-4 ${(itemIndex !== undefined && itemIndex % 2) === 0 ? "pr-2" : "pl-2"}`}>
			<GestureDetector gesture={combinedTapGestures}>
				<View>
					<Image
						className={
							"rounded-pawFinder w-full aspect-[4/3] shadow-pawFinder"
						}
						source={{ uri: dog.image.url }}
						resizeMode={"cover"}
					/>
					{heartIcon === "heart" && (
						<Animated.View
							style={[
								{
									position: "absolute",
									top: "30%",
									left: "30%",
									zIndex: 10,
								},
								animatedHeartStyle,
							]}>
							<AntDesign
								name="heart"
								size={64}
								color={Colors.theme.light}
							/>
						</Animated.View>
					)}
				</View>
			</GestureDetector>
			<View className={"p-2 flex-row justify-between items-center"}>
				<Text className={"text-lg font-bold text-gray"}>
					{dog.name}
				</Text>
				<TouchableOpacity
					className={"rounded-pawFinder bg-light"}
					onPress={() => {
						toggleHeartIcon(dog.id);
						triggerPulse();
					}}>
					<Animated.View style={pulseIconStyle}>
						<AntDesign
							name={heartIcon}
							size={16}
							color={Colors.theme.warning}
						/>
					</Animated.View>
				</TouchableOpacity>
			</View>
		</View>
	);

	// List Layout
	const renderListLayout = () => (
		<View className={"w-full bg-transparent rounded-pawFinder px-4 mb-4"}>
			<GestureDetector gesture={combinedTapGestures}>
				<View>
					<Image
						className={
							"rounded-pawFinder w-full aspect-[4/3] shadow-pawFinder"
						}
						source={{ uri: dog.image.url }}
						resizeMode={"cover"}
					/>
					{heartIcon === "heart" && (
						<Animated.View
							style={[
								{
									position: "absolute",
									top: "40%",
									left: "40%",
									zIndex: 10,
								},
								animatedHeartStyle,
							]}>
							<AntDesign
								name="heart"
								size={64}
								color={Colors.theme.light}
							/>
						</Animated.View>
					)}
				</View>
			</GestureDetector>
			<View className={"p-4"}>
				<View className={"flex-row justify-between items-center mb-2"}>
					<Text className={"text-2xl font-bold text-gray"}>
						{dog.name}
					</Text>
					<TouchableOpacity
						className={
							"rounded-pawFinder p-2 flex-row justify-center items-center bg-transparent"
						}
						onPress={() => {
							toggleHeartIcon(dog.id);
							triggerPulse();
						}}>
						<Animated.View style={pulseIconStyle}>
							<AntDesign
								name={heartIcon}
								size={24}
								color={Colors.theme.warning}
							/>
						</Animated.View>
					</TouchableOpacity>
				</View>
				<Text className={"mb-2 font-normal text-gray"}>
					{dog.temperament}
				</Text>
				<View className={"flex-row justify-between items-center my-4"}>
					<View>
						<View className={"flex-row items-center mb-3"}>
							<Ionicons
								name={"resize-outline"}
								size={20}
								color={Colors.theme.gray}
							/>
							<Text className={"font-normal text-gray mx-4"}>
								{dog.height.metric} cm
							</Text>
						</View>
						<View className={"flex-row items-center mb-3"}>
							<Ionicons
								name={"scale-outline"}
								size={20}
								color={Colors.theme.gray}
							/>
							<Text className={"font-normal text-gray mx-4"}>
								{dog.weight.metric} kg
							</Text>
						</View>
					</View>
					<View>
						<View className={"flex-row items-center mb-3"}>
							<Ionicons
								name={"hourglass-outline"}
								size={20}
								color={Colors.theme.gray}
							/>
							<Text className={"font-normal text-gray mx-4"}>
								{dog.life_span}
							</Text>
						</View>
						<View className={"flex-row items-center mb-3"}>
							<Ionicons
								name={"location-outline"}
								size={20}
								color={Colors.theme.gray}
							/>
							<Text className={"font-normal text-gray mx-4"}>
								{dog.origin}
							</Text>
						</View>
					</View>
				</View>
				<CustomLink href={"/(bottomTabs)/home-page?tab=private"}>
					Doznaj više
				</CustomLink>
			</View>
		</View>
	);

	return isGridLayout ? renderGridLayout() : renderListLayout();
};

export default DogAdoptionCard;
