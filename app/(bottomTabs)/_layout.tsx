import CustomTabsHeader from "@/components/main-components/CustomTabsHeader";
import TabBarIcon from "@/components/main-components/TabBarIcon";
import Colors from "@/constants/Colors";
import { ScrollProvider } from "@/context/ScrollContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

const BottomTabsLayout = () => {
	return <BottomTabsLayoutNav />;
};

const handleActionTabPress = (e: any) => {
	e.preventDefault();
	alert("Test");
	Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).then(
		() => ({}),
	);
};

const BottomTabsLayoutNav = () => {
	return (
		<ScrollProvider>
			<StatusBar style={"light"} />
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarIconStyle: styles.tabBarIconStyle,
					tabBarActiveTintColor: Colors.theme.light,
					tabBarInactiveTintColor: Colors.theme.primary200,
					tabBarStyle: styles.tabBar,
				}}>
				<Tabs.Screen
					name="home-page"
					options={{
						title: "Home Page",
						header: () => (
							<CustomTabsHeader title={"Dobrodošla Jana!"} />
						),
						tabBarIcon: ({ color, focused }) => (
							<TabBarIcon
								activeName={"home-sharp"}
								inactiveName={"home-outline"}
								title={"Home page"}
								color={color}
								focused={focused}
								type={"ionicons"}
							/>
						),
					}}
				/>

				<Tabs.Screen
					name="lost-found"
					options={{
						title: "Lost & Found",
						header: () => (
							<CustomTabsHeader title={"Lost & Found"} />
						),
						tabBarIcon: ({ color, focused }) => (
							<TabBarIcon
								activeName={"pets-fill"}
								inactiveName={"pets-outline"}
								title={"Lost & Found"}
								color={color}
								focused={focused}
								type={"custom"} // Using "custom" to indicate it's a custom image
							/>
						),
					}}
				/>
				<Tabs.Screen
					name={"action"}
					options={{
						title: "Action",
						tabBarIcon: ({ color, focused }) => (
							<MaterialCommunityIcons
								name="map-search-outline"
								size={24}
								color={color}
							/>
							// <FontAwesome5
							// 	name={focused ? "paw" : "paw"}
							// 	size={20}
							// 	color={color}
							// />
						),
						tabBarActiveTintColor: Colors.theme.warning,
						tabBarInactiveTintColor: Colors.theme.warning,
						tabBarIconStyle: styles.actionTabBarIconStyle,
					}}
					listeners={() => ({
						tabPress: handleActionTabPress,
					})}
				/>
				<Tabs.Screen
					name="conversations"
					options={{
						title: "Conversations",
						header: () => (
							<CustomTabsHeader title={"Conversations"} />
						),
						tabBarIcon: ({ color, focused }) => (
							<TabBarIcon
								activeName={"chatbubbles"}
								inactiveName={"chatbubbles-outline"}
								title={"Conversations"}
								color={color}
								focused={focused}
								type={"ionicons"}
							/>
						),
					}}
				/>
				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						header: () => <CustomTabsHeader title={"Profile"} />,
						tabBarIcon: ({ color, focused }) => (
							<TabBarIcon
								activeName={"user-alt"}
								inactiveName={"user"}
								title={"Profile"}
								color={color}
								focused={focused}
								type={"fa5"}
							/>
						),
					}}
				/>
			</Tabs>
		</ScrollProvider>
	);
};

export default BottomTabsLayout;

const styles = StyleSheet.create({
	tabBar: {
		backgroundColor: Colors.theme.primary,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		marginHorizontal: 8,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		height: 60,
		position: "absolute",
		bottom: 8,
	},
	tabBarIconStyle: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	actionTabBarIconStyle: {
		backgroundColor: Colors.theme.accent,
		borderRadius: 50,
		paddingHorizontal: 12,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: 50,
		color: Colors.theme.warning,
		borderColor: Colors.theme.primary200,
		borderWidth: 2,
	},
	icon: {
		width: 24,
		height: 24,
	},
});
