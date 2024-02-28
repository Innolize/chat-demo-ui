import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';

import router from '@configs/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<RouterProvider router={router} />,
);
