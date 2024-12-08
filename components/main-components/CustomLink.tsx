import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { CustomLinkProps } from "@/types/main-component-props";
import { Link } from "expo-router";
import clsx from "clsx";

const CustomLink = ({
	href,
	children,
	buttonClassName,
	buttonStyle,
	textClassName,
	textStyle,
}: CustomLinkProps) => {
	return (
		<Link
			href={href}
			asChild>
			<TouchableOpacity
				className={clsx(
					"w-full rounded-pawFinder p-4 bg-accent shadow-pawFinder",
					buttonClassName,
				)}
				activeOpacity={0.8}
				style={buttonStyle}>
				<Text
					className={clsx(
						"text-center text-light text-xl",
						textClassName,
					)}
					style={textStyle}>
					{children}
				</Text>
			</TouchableOpacity>
		</Link>
	);
};

export default CustomLink;
