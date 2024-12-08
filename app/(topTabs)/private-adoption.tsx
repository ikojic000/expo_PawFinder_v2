import React from "react";
import { Text } from "react-native";
import MainContainer from "@/components/main-components/MainContainer";

const PrivateAdoptionPage = () => {
	return (
		<MainContainer customClassName={"justify-center items-center p-4"}>
			<Text className={"text-2xl text-primary font-bold"}>
				Private Adoption
			</Text>
		</MainContainer>
	);
};

export default PrivateAdoptionPage;
