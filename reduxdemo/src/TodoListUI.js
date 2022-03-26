import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return ( 
        <div style={{margin: '20px'}}>
            <div>
                <Input 
                    placeholder='Write Something'
                    style={{width: '500px', marginRight: '10px'}}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button 
                    type='primary'
                    onClick={props.clickBtn}
                >增加</Button>
            </div>
            <div style={{width: '600px', margin: '20px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={() => {props.deleteItem(index)}}>
                            {item}
                        </List.Item>)} 
                />
            </div>
        </div> 
    );
}
 
export default TodoListUI;