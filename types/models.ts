export interface Dog {
	id: number;
	name: string;
	weight: {
		imperial: string;
		metric: string;
	};
	height: {
		imperial: string;
		metric: string;
	};
	bred_for?: string;
	breed_group?: string;
	life_span?: string;
	temperament?: string;
	origin?: string;
	country_code?: string;
	reference_image_id?: string;
	image: {
		id: string;
		width: number;
		height: number;
		url: string;
	};
}

export interface City {
	id: number;
	name: string;
}

export interface Conversation {
	id: number;
	sender: Sender;
	receiver: Receiver;
	messages: MessageHistory;
}

export interface Sender {
	id: number;
	username: string;
	fullName: string;
	profilePhoto: string;
}

export interface Receiver {
	id: number;
	username: string;
	fullName: string;
}

export interface MessageHistory {
	lastMessage: Message;
	messageList: Message[];
}

export interface Message {
	id: number;
	content: string;
	conversation_id: number;
	sender_id: number;
	sender_username: string;
	sender_fullName: string;
	receiver_id: number;
	receiver_username: string;
	receiver_fullName: string;
	received_datetime: string;
}
