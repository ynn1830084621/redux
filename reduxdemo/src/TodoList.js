import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.clickBtn = this.clickBtn.bind(this);
        store.subscribe(this.storeChange)//订阅redux的状态
        // console.log(this.state);
    }
    render() { 
        return ( 
            <div>
                <div style={{margin: '20px'}}>
                    <Input 
                        placeholder='Write Something'
                        style={{width: '500px', marginRight: '10px'}}
                        onChange={this.changeInputValue}
                        value={this.state.inputValue}
                    />
                    <Button 
                        type='primary'
                        onClick={this.clickBtn}
                    >增加</Button>
                </div>
                <div style={{width: '600px', margin: '20px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)} 
                    />
                </div>
            </div>
         );
    }
    changeInputValue(e) {
        // console.log(e.target.value);
        const action = {
            type : 'changeInput',
            value : e.target.value
        }
        store.dispatch(action)
    }
    clickBtn() {
        const action = { type :'addItem' };
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = { 
            type : 'deleteItem',
            index,
        };
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
}
export default TodoList;