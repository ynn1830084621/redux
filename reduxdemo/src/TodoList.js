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
        store.subscribe(this.storeChange)
        // console.log(this.state);
    }
    render() { 
        return ( 
            <div>
                <div style={{margin: '20px'}}>
                    <Input 
                        placeholder={this.state.inputValue}
                        style={{width: '500px', marginRight: '10px'}}
                        onChange={this.changeInputValue}
                    />
                    <Button type='primary'>增加</Button>
                </div>
                <div style={{width: '600px', margin: '20px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
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
    storeChange(){
        this.setState(store.getState())
    }
}
export default TodoList;