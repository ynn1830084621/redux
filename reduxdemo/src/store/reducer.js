import {  CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionType'
const defaultState = {
    inputValue : '',
    list : [
        '上午学习英语',
        '下午学习react',
        '晚上敲代码',
    ]
}
let reducerObj = (state = defaultState, action) => {
    //console.log(state, action);
    //reducer只能接收state不能改变state
    if(action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state));//深度拷贝state
        newState.inputValue = action.value;
        return newState;
    }
    if(action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);//push新内容到列表
        newState.inputValue = '';
        return newState;
    }
    if(action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}
export default reducerObj;
