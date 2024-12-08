import PrivateAdoptionPage from "@/app/(topTabs)/private-adoption";
import ShelterAdoptionPage from "@/app/(topTabs)/shelter-adoption";
import Colors from "@/constants/Colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

const Tab = createMaterialTopTabNavigator();

const TopTabsLayout = () => {
	return <TopTabsLayoutNav />;
};

const TopTabsLayoutNav = () => {
	const { tab } = useLocalSearchParams();

	return (
		<Tab.Navigator
			initialRouteName={
				tab === "private" ? "PrivateAdoption" : "ShelterAdoption"
			}
			screenOptions={({ route }) => ({
				tabBarStyle: {
					backgroundColor: Colors.theme.light,
					shadowColor: "transparent",
				},
				tabBarLabel: ({ focused, color }) => {
					const label = route.name.replace(/([A-Z])/g, " $1").trim();
					const firstWordCapitalized =
						label.charAt(0).toUpperCase() +
						label.slice(1).toLowerCase();

					return (
						<Text
							style={{
								color,
								textTransform: "none",
								fontSize: 16,
							}}>
							{firstWordCapitalized}
						</Text>
					);
				},
				tabBarActiveTintColor: Colors.theme.primary,
				tabBarInactiveTintColor: Colors.theme.gray,
				tabBarIndicatorStyle: {
					backgroundColor: Colors.theme.primary,
				},
			})}>
			<Tab.Screen
				name="ShelterAdoption"
				component={ShelterAdoptionPage}
			/>
			<Tab.Screen
				name="PrivateAdoption"
				component={PrivateAdoptionPage}
			/>
		</Tab.Navigator>
	);
};

export default TopTabsLayout;
