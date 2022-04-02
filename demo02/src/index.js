import React from 'react';
import ReactDOM from 'react-dom/client';
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
root.render(App);


