import React from 'react';

import { ChatList } from './chat-list';
import ChatTopbar from './chat-topbar';

import { Message, UserData } from '@/data';

interface ChatProps {
	initialMessages?: Message[];
	selectedUser: UserData;
	isMobile: boolean;
}

export function Chat({ initialMessages, selectedUser, isMobile }: ChatProps) {
	const [messages, setMessages] = React.useState<Message[]>(
		initialMessages || [],
	);

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
