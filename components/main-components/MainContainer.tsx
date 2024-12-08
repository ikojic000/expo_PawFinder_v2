import { View } from "react-native";
import { MainContainerProps } from "@/types/main-component-props";
import clsx from "clsx";

const MainContainer = ({ customClassName, children }: MainContainerProps) => {
	return (
		<View className={clsx("flex-1 bg-light", customClassName)}>
			{children}
		</View>
	);
};

export default MainContainer;
