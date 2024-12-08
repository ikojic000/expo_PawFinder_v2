import { ReactNode } from "react";
import {
	GestureResponderEvent,
	StyleProp,
	TextStyle,
	ViewStyle,
} from "react-native";
import { Href } from "expo-router";
import { SharedValue } from "react-native-reanimated";

export interface MainContainerProps {
	children?: ReactNode;
	customClassName?: string;
}

export interface CustomButtonProps {
	buttonStyle?: StyleProp<ViewStyle>; // Inline styles for button
	textStyle?: StyleProp<TextStyle>; // Inline styles for text
	buttonClassName?: string; // Tailwind class for button
	textClassName?: string; // Tailwind class for text
	onPress?: (event: GestureResponderEvent) => void; // onPress handler
	children: ReactNode; // Button label/content
	accessibilityLabel?: string; // Optional, for accessibility
}

export interface CustomLinkProps {
	href: Href;
	buttonStyle?: StyleProp<ViewStyle>; // Inline styles for button
	textStyle?: StyleProp<TextStyle>; // Inline styles for text
	buttonClassName?: string; // Tailwind class for button
	textClassName?: string; // Tailwind class for text
	children: ReactNode;
}

export interface CustomIconButtonProps {
	buttonStyle?: StyleProp<ViewStyle>; // Inline styles for button
	textStyle?: StyleProp<TextStyle>; // Inline styles for text
	buttonClassName?: string; // Tailwind class for button
	textClassName?: string; // Tailwind class for text
	onPress?: (event: GestureResponderEvent) => void; // onPress handler
	accessibilityLabel?: string; // Optional, for accessibility
	iconName: string;
	iconSize?: number;
	iconColor?: string;
}

export interface CustomHeaderProps {
	title: string;
	buttonAction?: void;
}

export interface AnimatedCustomHeaderProps {
	title?: string;
	scrollOffset?: SharedValue<number>;
}

export interface TabBarIconProps {
	activeName: string;
	inactiveName: string;
	title: string;
	color: string;
	focused: boolean;
	type: "fa5" | "fa6" | "ionicons" | "custom";
}

export interface LoaderProps {
	size?: number;
	tabBarVisible?: boolean;
}

export interface AnimatedScrollButtonProps {
	scrollOffset: SharedValue<number>;
	triggerDistance: number;
	scrollToTop: () => void;
}

export interface SwipeableRowProps {
	children: ReactNode;
	onArchive: () => void;
	onDelete: () => void;
	// onMore: () => void;
	customStyle?: any; // Inline styles for button
	customClassName?: string; // Tailwind class for button
}
