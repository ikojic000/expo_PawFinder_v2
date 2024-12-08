import React from "react";
import { Text, View } from "react-native";
import MainSafeAreaContainer from "@/components/main-components/MainSafeAreaContainer";
import CustomLink from "@/components/main-components/CustomLink";

const Index = () => {
	return (
		<MainSafeAreaContainer
			customClassName={"justify-center items-center p-4"}>
			<Text className={"my-4"}>Index</Text>
			<View className={"gap-4"}>
				<CustomLink href={"/(auth)/sign-in"}>Go to Sign In</CustomLink>
				<CustomLink href={"/(bottomTabs)/home-page"}>
					Go to Home Page
				</CustomLink>
				<CustomLink href={"/(bottomTabs)/lost-found"}>
					Go to Lost and Found
				</CustomLink>
				<CustomLink href={"/(bottomTabs)/conversations"}>
					Go to Conversations
				</CustomLink>
				<CustomLink href={"/(bottomTabs)/profile"}>
					Go to Profile
				</CustomLink>
				<CustomLink href={"/(topTabs)/private-adoption"}>
					Go to Top Tabs Private Adoption
				</CustomLink>
			</View>
		</MainSafeAreaContainer>
	);
};

export default Index;
