import { FlatList } from "react-native";
import { FlatList as GestureHandlerFlatList } from "react-native-gesture-handler";

export type AnimatedListRef = FlatList | GestureHandlerFlatList;

export interface ScrollMethods {
	scrollToOffset: (params: { offset: number; animated?: boolean }) => void;
}
