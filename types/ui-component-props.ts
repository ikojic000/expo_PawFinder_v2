import { City, Conversation, Dog } from "@/types/models";
import { SharedValue } from "react-native-reanimated";
import { ViewToken } from "react-native";

export interface ConversationCardProps {
	conversation: Conversation;
	viewableItems: SharedValue<ViewToken[]>;
}

export interface CityBadgeProps {
	city: City;
	isSelected: boolean;
	onSelect: () => void;
}

export interface SmallDogCardProps {
	dog?: Dog;
}

export interface DogAdoptionCardProps {
	dog: Dog;
	heartIcon: "heart" | "hearto";
	toggleHeartIcon: (dogId: number) => void;
	isGridLayout?: boolean;
	itemIndex?: number;
}
