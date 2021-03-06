import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from 'serviceWorker';
import ErrorBoundry from 'common/ErrorBoundry'
import { Provider } from "react-redux"
import store from 'store'
import App from 'App';
import 'index.scss';

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundry>
			<Provider store={store}>
				<App />
			</Provider>
		</ErrorBoundry>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
