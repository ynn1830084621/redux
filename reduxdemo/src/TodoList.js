import React, { Component } from 'react';
import store from './store'
import { changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreactor'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        store.subscribe(this.storeChange)//订阅redux的状态
        // console.log(this.state);
    }
    render() { 
        return ( 
            < TodoListUI
                inputValue = {this.state.inputValue}
                changeInputValue = {this.changeInputValue}
                clickBtn = {this.clickBtn}
                list = {this.state.list}
                deleteItem = {this.deleteItem}

            />  
        );
    }
    
    componentDidMount() {
        axios.get('http://127.0.0.1:4523/mock/792764/TodoList').then((res) => {
            console.log(res);
            const data = res.data;
            const action = getListAction(data);
            store.dispatch(action);
        })
    }

    changeInputValue(e) {
        // console.log(e.target.value);
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    clickBtn() {
        const action = addItemAction();
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index);
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}
export default TodoList;