import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container)
root.render(App)
//ReactDOM.render( App, document.getElementById('root'));

