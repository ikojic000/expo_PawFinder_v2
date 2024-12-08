import React from "react";
import { StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import { LoaderProps } from "@/types/main-component-props";

const Loader = ({ size, tabBarVisible }: LoaderProps) => {
	return (
		<LottieView
			source={require("@/assets/animations/Loader.json")}
			autoPlay
			loop
			style={[
				styles.animation,
				{
					width: size ?? styles.animation.width,
					height: size ?? styles.animation.height,
					marginBottom: tabBarVisible ? 60 : 0,
				},
			]}
		/>
	);
};

export default Loader;

const styles = StyleSheet.create({
	animation: {
		width: 125,
		height: 125,
	},
});
