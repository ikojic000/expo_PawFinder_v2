import React, { createContext, useContext } from "react";
import { SharedValue, useSharedValue } from "react-native-reanimated";

interface ScrollContextProps {
	scrollOffset: SharedValue<number>;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
	const scrollOffset = useSharedValue(0);

	return (
		<ScrollContext.Provider value={{ scrollOffset }}>
			{children}
		</ScrollContext.Provider>
	);
};

export const useScroll = (): ScrollContextProps => {
	const context = useContext(ScrollContext);
	if (!context) {
		throw new Error("useScroll must be used within a ScrollProvider");
	}

	return context;
};
