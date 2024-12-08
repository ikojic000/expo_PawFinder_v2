import { useScroll } from "@/context/ScrollContext";
import { AnimatedListRef, ScrollMethods } from "@/types/list-types";
import {
	Extrapolation,
	interpolate,
	useAnimatedRef,
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
} from "react-native-reanimated";

const useScrollList = () => {
	const { scrollOffset } = useScroll();
	const mainListRef = useAnimatedRef<AnimatedListRef>(); // Ensure this ref is handled properly
	const headerHeight = useSharedValue(182); // Initial height of the header
	const initialHeaderHeight = 182;
	const minHeaderHeight = 100;

	const scrollHandler = useAnimatedScrollHandler({
		onScroll: (event) => {
			scrollOffset.value = event.contentOffset.y;
			// console.log("scrollOffset", scrollOffset.value);
			headerHeight.value = interpolate(
				event.contentOffset.y,
				[0, 200], // Range of scrolling
				[initialHeaderHeight, minHeaderHeight], // Header height reducing from 200px to 100px
				Extrapolation.CLAMP,
			);
			console.log("headerHeight", headerHeight.value);
		},
		onMomentumBegin: (e) => {
			console.log("The list is moving.");
		},
		onMomentumEnd: (e) => {
			console.log("The list stopped moving.");
		},
	});

	// Scroll handler to track the current scroll position
	// const scrollHandler = useAnimatedScrollHandler((event) => {
	// 	scrollOffset.value = event.contentOffset.y;
	// 	// console.log("scrollOffset", scrollOffset.value);
	// 	headerHeight.value = interpolate(
	// 		event.contentOffset.y,
	// 		[0, 200], // Range of scrolling
	// 		[182, 0], // Header height reducing from 200px to 100px
	// 		Extrapolation.CLAMP,
	// 	);
	// 	console.log("headerHeight", headerHeight.value);
	// });

	const scrollToTop = () => {
		if (mainListRef.current) {
			// Handle both FlatList types
			const list = mainListRef.current as unknown as ScrollMethods;
			if (list.scrollToOffset) {
				list.scrollToOffset({ offset: 0, animated: true });
			}
		}
	};

	const resetScrollOffset = () => {
		scrollOffset.value = 0;
		headerHeight.value = initialHeaderHeight;
	};

	const headerAnimatedStyle = useAnimatedStyle(() => {
		return {
			height: headerHeight.value,
			overflow: "hidden",
		};
	});

	return {
		scrollHandler,
		scrollToTop,
		resetScrollOffset,
		scrollOffset,
		mainListRef,
		headerAnimatedStyle,
	};
};

export default useScrollList;
