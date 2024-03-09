import React, { useEffect } from 'react';

import { ChatList } from './chat-list';
import ChatTopbar from './chat-topbar';

import { Message, UserData } from '@/data';

interface ChatProps {
	selectedUser: UserData;
	isMobile: boolean;
}

export function Chat({ selectedUser, isMobile }: ChatProps) {
	const [messages, setMessages] = React.useState<Message[]>([]);

	useEffect(() => {
		const getChatData = async () => {
			const response = await fetch(`/api/chat/user/${selectedUser.id}`);
			const data = await response.json();
			setMessages(data.messages);
		};

		getChatData();
	}, []);

	const sendMessage = (newMessage: Message) => {
		setMessages([...messages, newMessage]);
	};

	return (
		<div className="flex flex-col justify-between w-full h-full">
			<ChatTopbar selectedUser={selectedUser} />

			<ChatList
				messages={messages}
				selectedUser={selectedUser}
				sendMessage={sendMessage}
				isMobile={isMobile}
			/>
		</div>
	);
}
