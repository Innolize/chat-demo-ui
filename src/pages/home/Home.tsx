import Cookies from 'js-cookie';

import { ChatLayout } from '@/components/chat/chat-layout';

export default function Home() {
	const layout = Cookies.get('react-resizable-panels:layout');
	const defaultLayout = layout ? JSON.parse(layout) : undefined;

	return (
		<div className="flex items-center justify-center max-w-5xl border">
			<ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
		</div>
	);
}
