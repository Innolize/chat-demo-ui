import Cookies from 'js-cookie';
import { useContext, useEffect } from 'react';

import './globals.css';

import { ChatLayout } from '@/components/chat/chat-layout';
import { SocketContext, SocketProvider } from '@/context/SocketContext';
import { EMIT } from '@/service/websocket/emit';

export default function Home() {
	const socket = useContext(SocketContext);

	useEffect(() => {
		socket.emit(EMIT.JOIN_ROOM, '1');
		return () => {
			socket.emit(EMIT.LEAVE_ROOM, '1');
		};
	}, []);

	const layout = Cookies.get('react-resizable-panels:layout');
	const defaultLayout = layout ? JSON.parse(layout) : undefined;

	return (
		<SocketProvider>
			<main className="flex h-[calc(100dvh)] flex-col items-center justify-center p-4 md:px-24 py-32 gap-4">
				<div className="z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex">
					<ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
				</div>

				<div className="flex justify-between max-w-5xl w-full items-start text-xs md:text-sm text-muted-foreground ">
					<p className="max-w-[150px] sm:max-w-lg">
						Built by{' '}
						<a className="font-semibold" href="https://github.com/jakobhoeg/">
							Jakob Hoeg
						</a>
						. To be used with{' '}
						<a className="font-semibold" href="https://ui.shadcn.com/">
							shadcn
						</a>
						.
					</p>
					<p className="max-w-[150px] sm:max-w-lg text-right">
						Source code available on{' '}
						<a
							className="font-semibold"
							href="https://github.com/jakobhoeg/shadcn-chat"
						>
							GitHub
						</a>
					</p>
				</div>
			</main>
		</SocketProvider>
	);
}
