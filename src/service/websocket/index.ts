import { io } from 'socket.io-client';

export const socket = io(import.meta.env.VITE_BASE_API_URL as string);
