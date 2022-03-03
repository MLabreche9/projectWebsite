import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<div className='background'>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</div>,
	document.getElementById('root')
);
