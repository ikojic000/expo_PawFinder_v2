import { forwardRef } from "react";
import { FlatList } from "react-native";
import { AnimatedListRef } from "@/types/list-types";
import Animated from "react-native-reanimated";

// Create a generic AnimatedFlatList component that forwards its ref
const AnimatedFlatList = forwardRef<
	AnimatedListRef,
	React.ComponentProps<typeof FlatList<any>>
>((props, ref) => {
	return (
		<Animated.FlatList
			{...props} // Spread all FlatList props
			ref={ref} // Forward the ref properly
			CellRendererComponent={undefined} // Ensure CellRendererComponent is undefined
		/>
	);
});

// Set a display name for easier debugging
AnimatedFlatList.displayName = "AnimatedFlatList";

export default AnimatedFlatList;
