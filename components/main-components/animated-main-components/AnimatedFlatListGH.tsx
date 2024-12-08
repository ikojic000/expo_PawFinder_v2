import React, { forwardRef } from "react";
import { FlatList as GestureHandlerFlatList } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { AnimatedListRef } from "@/types/list-types";

// Create a wrapper class component for GestureHandlerFlatList
class WrappedGestureHandlerFlatList<T> extends React.Component<
	React.ComponentProps<typeof GestureHandlerFlatList<T>>
> {
	render() {
		return <GestureHandlerFlatList {...this.props} />;
	}
}

// Make WrappedGestureHandlerFlatList animated
const AnimatedGestureHandlerFlatList = Animated.createAnimatedComponent(
	WrappedGestureHandlerFlatList,
);

// Define the AnimatedFlatListGH component
const AnimatedFlatListGH = forwardRef<
	AnimatedListRef,
	React.ComponentProps<typeof GestureHandlerFlatList>
>((props, ref) => {
	return (
		<AnimatedGestureHandlerFlatList
			{...props}
			ref={ref as any} // Type assertion for ref compatibility
		/>
	);
});

AnimatedFlatListGH.displayName = "AnimatedFlatListGH";

export default AnimatedFlatListGH;
