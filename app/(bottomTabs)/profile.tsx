import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import MainSafeAreaContainer from "@/components/main-components/MainSafeAreaContainer";
import CustomIconButton from "@/components/main-components/CustomIconButton";

const ProfileHeaderComponent = () => {
	const insets = useSafeAreaInsets();

	return (
		<View className={"bg-light"}>
			<View
				style={{
					paddingTop: insets.top,
					backgroundColor: Colors.theme.primary,
				}}
				className={
					"mx-2 shadow-pawFinder flex-row justify-between items-center"
				}
			/>
			<View className={"h-[44px]"}>
				<View className={"bg-primary mx-2 relative h-[22px]"} />
				<View
					// style={{ height: 22 }}
					className={
						"mx-2 flex-row justify-evenly items-start h-[22px]"
					}>
					<View
						className={
							"bg-primary h-full flex-1 rounded-b-pawFinder rounded-br-[11px]"
						}
					/>
					<View
						style={{
							width: 82,
							height: "53%",
							// backgroundColor: "#1024de",
							backgroundColor: Colors.theme.primary,
						}}
						className={"h-1/2 relative"}>
						<View
							style={{
								height: 86,
								width: 86,
								borderRadius: 100,
								top: -18,
								left: -2,
								borderWidth: 4,
							}}
							className={
								"absolute bg-primary border-light border-2 flex justify-center items-center"
							}>
							<Image
								source={require("@/assets/images/profile.jpg")}
								style={{
									width: 80,
									height: 80,
									borderRadius: 40,
								}}
							/>
						</View>
					</View>
					<View
						className={
							"bg-primary h-full flex-1 rounded-b-pawFinder rounded-bl-[11px]"
						}
					/>
				</View>
			</View>
		</View>
		// <View
		// 	style={{
		// 		paddingTop: insets.top * 1.25,
		// 	}}
		// 	className={
		// 		"bg-primary rounded-b-pawFinder mx-2 shadow-pawFinder flex-row justify-evenly items-start h-[80px]"
		// 	}>
		// 	<View
		// 		className={"flex-1 bg-primary h-full rounded-b-pawFinder mt-4"}>
		// 		<Text className={"text-light"}>Profile</Text>
		// 	</View>
		// 	<View className={"bg-primary h-[30px] w-[100px] relative"}>
		// 		<View
		// 			className={
		// 				"absolute bg-primary-400 rounded-[50px] w-[100px] h-[100px] border-light border-2"
		// 			}></View>
		// 	</View>
		// 	<View className={"flex-1 bg-primary h-full rounded-b-pawFinder"}>
		// 		<Text className={"text-light"}>Profile</Text>
		// 	</View>
		// </View>
	);
};

const Profile = () => {
	return (
		<>
			<Tabs.Screen
				options={{
					header: () => <ProfileHeaderComponent />,
				}}
			/>
			<MainSafeAreaContainer customClassName={"p-4"}>
				<View
					className={
						"items-center justify-center my-4 flex-row relative"
					}>
					<Text
						className={
							"text-3xl font-bold text-gray flex-1 text-center"
						}>
						Sydney Sweeney
					</Text>

					<CustomIconButton
						buttonClassName={"absolute right-4 shadow-none"}
						iconName={"settings-outline"}
						iconSize={20}
					/>
				</View>
			</MainSafeAreaContainer>
		</>
	);
};

export default Profile;
