import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainContainerProps } from "@/types/main-component-props";
import clsx from "clsx";

const MainSafeAreaContainer = ({
	children,
	customClassName,
}: MainContainerProps) => {
	return (
		<SafeAreaView className={clsx("flex-1 bg-light", customClassName)}>
			{children}
		</SafeAreaView>
	);
};

export default MainSafeAreaContainer;
