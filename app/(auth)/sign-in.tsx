import React from "react";
import { Text } from "react-native";
import MainSafeAreaContainer from "@/components/main-components/MainSafeAreaContainer";

const SignIn = () => {
	return (
		<MainSafeAreaContainer
			customClassName={"justify-center items-center p-4"}>
			<Text className={"text-3xl text-dark"}>Sign In</Text>
		</MainSafeAreaContainer>
	);
};

export default SignIn;
