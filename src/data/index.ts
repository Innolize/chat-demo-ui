export const loggedInUserData = {
	id: 1,
	name: 'Bulbasaur',
	avatar: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
};

export const userData = [
	{
		id: 1,
		avatar: '/User1.png',
		name: 'Jane Doe',
	},
	{
		id: 2,
		avatar: '/User2.png',
		name: 'John Doe',
	},
	{
		id: 3,
		avatar: '/User3.png',
		name: 'Elizabeth Smith',
	},
	{
		id: 4,
		avatar: '/User4.png',
		name: 'John Smith',
	},
];

export type UserData = (typeof userData)[number];

export type LoggedInUserData = typeof loggedInUserData;

export interface CreateMessage {
	chat_id: number;
	user_id: number;
	message: string;
}

export interface Message {
	id: number;
	chat_id: number;
	user_id: number;
	message: string;
	user?: User;
}

export interface User {
	id: number;
	avatar: string;
	messages: Message[];
	name: string;
}
