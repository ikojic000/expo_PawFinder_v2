const MockConversations = [
	{
		id: 1,
		sender: {
			id: 1,
			username: "john_doe",
			fullName: "John Doe",
			profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 501,
				content: "Hey, are you still available for the dog adoption?",
				conversation_id: 1,
				sender_id: 1,
				sender_username: "john_doe",
				sender_fullName: "John Doe",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-27T14:23:00Z",
			},
			messageList: [
				{
					id: 1,
					content: "Hi Ivan, is the dog still available?",
					conversation_id: 1,
					sender_id: 1,
					sender_username: "john_doe",
					sender_fullName: "John Doe",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-27T13:00:00Z",
				},
				{
					id: 2,
					content: "Yes, it's still available!",
					conversation_id: 1,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 1,
					receiver_username: "john_doe",
					receiver_fullName: "John Doe",
					received_datetime: "2024-09-27T13:05:00Z",
				},
			],
		},
	},
	{
		id: 2,
		sender: {
			id: 2,
			username: "jane_smith",
			fullName: "Jane Smith",
			profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 502,
				content: "Thanks for the information!",
				conversation_id: 2,
				sender_id: 2,
				sender_username: "jane_smith",
				sender_fullName: "Jane Smith",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-27T15:10:00Z",
			},
			messageList: [
				{
					id: 3,
					content: "Can I schedule a visit?",
					conversation_id: 2,
					sender_id: 2,
					sender_username: "jane_smith",
					sender_fullName: "Jane Smith",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-27T14:30:00Z",
				},
				{
					id: 4,
					content: "Yes, of course! How about tomorrow?",
					conversation_id: 2,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 2,
					receiver_username: "jane_smith",
					receiver_fullName: "Jane Smith",
					received_datetime: "2024-09-27T14:45:00Z",
				},
			],
		},
	},
	{
		id: 3,
		sender: {
			id: 3,
			username: "mark_robinson",
			fullName: "Mark Robinson",
			profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 503,
				content: "I'll get back to you soon.",
				conversation_id: 3,
				sender_id: 3,
				sender_username: "mark_robinson",
				sender_fullName: "Mark Robinson",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-27T16:45:00Z",
			},
			messageList: [
				{
					id: 5,
					content: "Hi, how can I start the adoption process?",
					conversation_id: 3,
					sender_id: 3,
					sender_username: "mark_robinson",
					sender_fullName: "Mark Robinson",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-27T15:30:00Z",
				},
				{
					id: 6,
					content: "I'll send you all the details shortly.",
					conversation_id: 3,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 3,
					receiver_username: "mark_robinson",
					receiver_fullName: "Mark Robinson",
					received_datetime: "2024-09-27T16:00:00Z",
				},
			],
		},
	},
	{
		id: 4,
		sender: {
			id: 4,
			username: "emily_wilson",
			fullName: "Emily Wilson",
			profilePhoto: "https://randomuser.me/api/portraits/women/4.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 504,
				content: "Let me check and confirm with you.",
				conversation_id: 4,
				sender_id: 4,
				sender_username: "emily_wilson",
				sender_fullName: "Emily Wilson",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-28T08:12:00Z",
			},
			messageList: [
				{
					id: 7,
					content: "Is it possible to visit the shelter next week?",
					conversation_id: 4,
					sender_id: 4,
					sender_username: "emily_wilson",
					sender_fullName: "Emily Wilson",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-28T07:45:00Z",
				},
				{
					id: 8,
					content: "Sure, we can arrange that. Let me know the date.",
					conversation_id: 4,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 4,
					receiver_username: "emily_wilson",
					receiver_fullName: "Emily Wilson",
					received_datetime: "2024-09-28T08:00:00Z",
				},
			],
		},
	},
	{
		id: 5,
		sender: {
			id: 5,
			username: "michael_jordan",
			fullName: "Michael Jordan",
			profilePhoto: "https://randomuser.me/api/portraits/men/5.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 505,
				content: "Got the dog food, thanks!",
				conversation_id: 5,
				sender_id: 5,
				sender_username: "michael_jordan",
				sender_fullName: "Michael Jordan",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-28T09:30:00Z",
			},
			messageList: [
				{
					id: 9,
					content: "Do you need anything for the dog?",
					conversation_id: 5,
					sender_id: 5,
					sender_username: "michael_jordan",
					sender_fullName: "Michael Jordan",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-28T08:45:00Z",
				},
				{
					id: 10,
					content: "A bag of dog food would be great.",
					conversation_id: 5,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 5,
					receiver_username: "michael_jordan",
					receiver_fullName: "Michael Jordan",
					received_datetime: "2024-09-28T09:00:00Z",
				},
			],
		},
	},
	{
		id: 6,
		sender: {
			id: 6,
			username: "sarah_lee",
			fullName: "Sarah Lee",
			profilePhoto: "https://randomuser.me/api/portraits/women/6.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 506,
				content: "I'll drop by the shelter tomorrow morning.",
				conversation_id: 6,
				sender_id: 6,
				sender_username: "sarah_lee",
				sender_fullName: "Sarah Lee",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-28T10:15:00Z",
			},
			messageList: [
				{
					id: 11,
					content: "Hi Ivan, when can I come to meet the dogs?",
					conversation_id: 6,
					sender_id: 6,
					sender_username: "sarah_lee",
					sender_fullName: "Sarah Lee",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-28T09:30:00Z",
				},
				{
					id: 12,
					content: "Tomorrow morning works perfectly!",
					conversation_id: 6,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 6,
					receiver_username: "sarah_lee",
					receiver_fullName: "Sarah Lee",
					received_datetime: "2024-09-28T09:45:00Z",
				},
			],
		},
	},
	{
		id: 7,
		sender: {
			id: 7,
			username: "david_brown",
			fullName: "David Brown",
			profilePhoto: "https://randomuser.me/api/portraits/men/7.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 507,
				content: "Looking forward to adopting my new best friend!",
				conversation_id: 7,
				sender_id: 7,
				sender_username: "david_brown",
				sender_fullName: "David Brown",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-28T11:00:00Z",
			},
			messageList: [
				{
					id: 13,
					content: "Thank you for your help today, Ivan!",
					conversation_id: 7,
					sender_id: 7,
					sender_username: "david_brown",
					sender_fullName: "David Brown",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-28T10:00:00Z",
				},
				{
					id: 14,
					content: "You're welcome! We’re excited to help you.",
					conversation_id: 7,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 7,
					receiver_username: "david_brown",
					receiver_fullName: "David Brown",
					received_datetime: "2024-09-28T10:15:00Z",
				},
			],
		},
	},
	{
		id: 8,
		sender: {
			id: 8,
			username: "laura_clark",
			fullName: "Laura Clark",
			profilePhoto: "https://randomuser.me/api/portraits/women/8.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 508,
				content: "I will let you know if I can come on Sunday.",
				conversation_id: 8,
				sender_id: 8,
				sender_username: "laura_clark",
				sender_fullName: "Laura Clark",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-28T11:30:00Z",
			},
			messageList: [
				{
					id: 15,
					content: "Is Sunday a good day for a visit?",
					conversation_id: 8,
					sender_id: 8,
					sender_username: "laura_clark",
					sender_fullName: "Laura Clark",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-28T10:45:00Z",
				},
				{
					id: 16,
					content: "Yes, that would work. Just let me know.",
					conversation_id: 8,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 8,
					receiver_username: "laura_clark",
					receiver_fullName: "Laura Clark",
					received_datetime: "2024-09-28T11:00:00Z",
				},
			],
		},
	},
	{
		id: 9,
		sender: {
			id: 9,
			username: "kevin_white",
			fullName: "Kevin White",
			profilePhoto: "https://randomuser.me/api/portraits/men/9.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 509,
				content: "Let me check my schedule and get back to you.",
				conversation_id: 9,
				sender_id: 9,
				sender_username: "kevin_white",
				sender_fullName: "Kevin White",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-28T12:00:00Z",
			},
			messageList: [
				{
					id: 17,
					content: "Hey Ivan, can I come this weekend?",
					conversation_id: 9,
					sender_id: 9,
					sender_username: "kevin_white",
					sender_fullName: "Kevin White",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-28T11:15:00Z",
				},
				{
					id: 18,
					content: "Saturday is open. Does that work for you?",
					conversation_id: 9,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 9,
					receiver_username: "kevin_white",
					receiver_fullName: "Kevin White",
					received_datetime: "2024-09-28T11:30:00Z",
				},
			],
		},
	},
	{
		id: 10,
		sender: {
			id: 10,
			username: "emma_bell",
			fullName: "Emma Bell",
			profilePhoto: "https://randomuser.me/api/portraits/women/10.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 510,
				content: "I'll be there on Saturday at noon.",
				conversation_id: 10,
				sender_id: 10,
				sender_username: "emma_bell",
				sender_fullName: "Emma Bell",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-28T12:15:00Z",
			},
			messageList: [
				{
					id: 19,
					content: "What time works best for a visit this weekend?",
					conversation_id: 10,
					sender_id: 10,
					sender_username: "emma_bell",
					sender_fullName: "Emma Bell",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-28T11:45:00Z",
				},
				{
					id: 20,
					content: "Saturday at noon is perfect.",
					conversation_id: 10,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 10,
					receiver_username: "emma_bell",
					receiver_fullName: "Emma Bell",
					received_datetime: "2024-09-28T12:00:00Z",
				},
			],
		},
	},
	{
		id: 11,
		sender: {
			id: 11,
			username: "oliver_white",
			fullName: "Oliver White",
			profilePhoto: "https://randomuser.me/api/portraits/men/11.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 511,
				content: "I'll send you the report by the end of the day.",
				conversation_id: 11,
				sender_id: 11,
				sender_username: "oliver_white",
				sender_fullName: "Oliver White",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-29T14:30:00Z",
			},
			messageList: [
				{
					id: 21,
					content: "Can you send me the report as soon as possible?",
					conversation_id: 11,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 11,
					receiver_username: "oliver_white",
					receiver_fullName: "Oliver White",
					received_datetime: "2024-09-29T14:00:00Z",
				},
				{
					id: 22,
					content: "I'm working on it now.",
					conversation_id: 11,
					sender_id: 11,
					sender_username: "oliver_white",
					sender_fullName: "Oliver White",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-29T14:15:00Z",
				},
			],
		},
	},
	{
		id: 12,
		sender: {
			id: 12,
			username: "charlotte_taylor",
			fullName: "Charlotte Taylor",
			profilePhoto: "https://randomuser.me/api/portraits/women/12.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 512,
				content: "Let's schedule a meeting for next week.",
				conversation_id: 12,
				sender_id: 12,
				sender_username: "charlotte_taylor",
				sender_fullName: "Charlotte Taylor",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-30T10:00:00Z",
			},
			messageList: [
				{
					id: 23,
					content: "Hi Ivan, how are you?",
					conversation_id: 12,
					sender_id: 12,
					sender_username: "charlotte_taylor",
					sender_fullName: "Charlotte Taylor",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-30T09:30:00Z",
				},
				{
					id: 24,
					content: "I'm good, thanks. What's up?",
					conversation_id: 12,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 12,
					receiver_username: "charlotte_taylor",
					receiver_fullName: "Charlotte Taylor",
					received_datetime: "2024-09-30T09:45:00Z",
				},
			],
		},
	},
	{
		id: 13,
		sender: {
			id: 13,
			username: "william_hall",
			fullName: "William Hall",
			profilePhoto: "https://randomuser.me/api/portraits/men/13.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 513,
				content: "I'll call you later today.",
				conversation_id: 13,
				sender_id: 13,
				sender_username: "william_hall",
				sender_fullName: "William Hall",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-09-30T12:00:00Z",
			},
			messageList: [
				{
					id: 25,
					content: "Hi Ivan, can we talk about the project?",
					conversation_id: 13,
					sender_id: 13,
					sender_username: "william_hall",
					sender_fullName: "William Hall",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-09-30T11:30:00Z",
				},
				{
					id: 26,
					content: "What's up with the project?",
					conversation_id: 13,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 13,
					receiver_username: "william_hall",
					receiver_fullName: "William Hall",
					received_datetime: "2024-09-30T11:45:00Z",
				},
			],
		},
	},
	{
		id: 14,
		sender: {
			id: 14,
			username: "sophia_parker",
			fullName: "Sophia Parker",
			profilePhoto: "https://randomuser.me/api/portraits/women/14.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 514,
				content: "Let's meet for coffee tomorrow.",
				conversation_id: 14,
				sender_id: 14,
				sender_username: "sophia_parker",
				sender_fullName: "Sophia Parker",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-10-01T10:00:00Z",
			},
			messageList: [
				{
					id: 27,
					content: "Hi Ivan, how's it going?",
					conversation_id: 14,
					sender_id: 14,
					sender_username: "sophia_parker",
					sender_fullName: "Sophia Parker",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-10-01T09:30:00Z",
				},
				{
					id: 28,
					content: "I'm good, thanks. What's up?",
					conversation_id: 14,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 14,
					receiver_username: "sophia_parker",
					receiver_fullName: "Sophia Parker",
					received_datetime: "2024-10-01T09:45:00Z",
				},
			],
		},
	},
	{
		id: 15,
		sender: {
			id: 15,
			username: "olivia_brown",
			fullName: "Olivia Brown",
			profilePhoto: "https://randomuser.me/api/portraits/women/15.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 515,
				content: "I'll send you the files later today.",
				conversation_id: 15,
				sender_id: 15,
				sender_username: "olivia_brown",
				sender_fullName: "Olivia Brown",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-10-01T14:00:00Z",
			},
			messageList: [
				{
					id: 29,
					content: "Hi Ivan, can you review the documents?",
					conversation_id: 15,
					sender_id: 15,
					sender_username: "olivia_brown",
					sender_fullName: "Olivia Brown",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-10-01T13:30:00Z",
				},
				{
					id: 30,
					content: "What documents?",
					conversation_id: 15,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 15,
					receiver_username: "olivia_brown",
					receiver_fullName: "Olivia Brown",
					received_datetime: "2024-10-01T13:45:00Z",
				},
			],
		},
	},
	{
		id: 16,
		sender: {
			id: 16,
			username: "ava_davis",
			fullName: "Ava Davis",
			profilePhoto: "https://randomuser.me/api/portraits/women/16.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 516,
				content: "I'll meet you at the conference at 2 PM.",
				conversation_id: 16,
				sender_id: 16,
				sender_username: "ava_davis",
				sender_fullName: "Ava Davis",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-10-02T10:00:00Z",
			},
			messageList: [
				{
					id: 31,
					content: "Hi Ivan, are you attending the conference?",
					conversation_id: 16,
					sender_id: 16,
					sender_username: "ava_davis",
					sender_fullName: "Ava Davis",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-10-02T09:30:00Z",
				},
				{
					id: 32,
					content: "Yes, I'll be there. What time should I meet you?",
					conversation_id: 16,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 16,
					receiver_username: "ava_davis",
					receiver_fullName: "Ava Davis",
					received_datetime: "2024-10-02T09:45:00Z",
				},
			],
		},
	},
	{
		id: 17,
		sender: {
			id: 17,
			username: "ethan_patel",
			fullName: "Ethan Patel",
			profilePhoto: "https://randomuser.me/api/portraits/men/17.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 517,
				content: "I'll send you the report by the end of the week.",
				conversation_id: 17,
				sender_id: 17,
				sender_username: "ethan_patel",
				sender_fullName: "Ethan Patel",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-10-03T10:00:00Z",
			},
			messageList: [
				{
					id: 33,
					content: "Hi Ivan, can you review the report?",
					conversation_id: 17,
					sender_id: 17,
					sender_username: "ethan_patel",
					sender_fullName: "Ethan Patel",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-10-03T09:30:00Z",
				},
				{
					id: 34,
					content: "What report?",
					conversation_id: 17,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 17,
					receiver_username: "ethan_patel",
					receiver_fullName: "Ethan Patel",
					received_datetime: "2024-10-03T09:45:00Z",
				},
			],
		},
	},
	{
		id: 18,
		sender: {
			id: 18,
			username: "james_smith",
			fullName: "James Smith",
			profilePhoto: "https://randomuser.me/api/portraits/men/18.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 518,
				content: "I'll send you the updated proposal by tomorrow.",
				conversation_id: 18,
				sender_id: 18,
				sender_username: "james_smith",
				sender_fullName: "James Smith",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-10-04T12:00:00Z",
			},
			messageList: [
				{
					id: 35,
					content: "Hi Ivan, can you review the updated proposal?",
					conversation_id: 18,
					sender_id: 18,
					sender_username: "james_smith",
					sender_fullName: "James Smith",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-10-04T11:30:00Z",
				},
				{
					id: 36,
					content: "What's changed?",
					conversation_id: 18,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 18,
					receiver_username: "james_smith",
					receiver_fullName: "James Smith",
					received_datetime: "2024-10-04T11:45:00Z",
				},
			],
		},
	},
	{
		id: 19,
		sender: {
			id: 19,
			username: "emma_watson",
			fullName: "Emma Watson",
			profilePhoto: "https://randomuser.me/api/portraits/women/19.jpg",
		},
		receiver: {
			id: 100,
			username: "ikojic000",
			fullName: "Ivan Kojic",
		},
		messages: {
			lastMessage: {
				id: 519,
				content: "I'll meet you at the concert at 8 PM.",
				conversation_id: 19,
				sender_id: 19,
				sender_username: "emma_watson",
				sender_fullName: "Emma Watson",
				receiver_id: 100,
				receiver_username: "ikojic000",
				receiver_fullName: "Ivan Kojic",
				received_datetime: "2024-10-05T16:00:00Z",
			},
			messageList: [
				{
					id: 37,
					content: "Hi Ivan, are you attending the concert?",
					conversation_id: 19,
					sender_id: 19,
					sender_username: "emma_watson",
					sender_fullName: "Emma Watson",
					receiver_id: 100,
					receiver_username: "ikojic000",
					receiver_fullName: "Ivan Kojic",
					received_datetime: "2024-10-05T15:30:00Z",
				},
				{
					id: 38,
					content: "Yes, I'll be there. See you at 8 PM.",
					conversation_id: 19,
					sender_id: 100,
					sender_username: "ikojic000",
					sender_fullName: "Ivan Kojic",
					receiver_id: 19,
					receiver_username: "emma_watson",
					receiver_fullName: "Emma Watson",
					received_datetime: "2024-10-05T15:45:00Z",
				},
			],
		},
	},
];
export default MockConversations;
