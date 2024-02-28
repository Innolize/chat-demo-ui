import React from 'react';
import { Socket } from 'socket.io-client';

import { socket } from '@/service/websocket';

export const SocketContext = React.createContext<Socket>(socket);

export const SocketProvider = ({ children }: React.PropsWithChildren) => {
	return (
		<SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
	);
};
