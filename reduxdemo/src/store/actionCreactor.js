import { GET_MY_LIST, CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionType';
//import axios from 'axios';

export const changeInputAction = (value) => ({
    type : CHANGE_INPUT,
    value
})
export const addItemAction = () => ({
    type : ADD_ITEM,
})
export const deleteItemAction = (index) => ({
    type : DELETE_ITEM,
    index
})
export const getListAction = (data) => ({
    type : GET_LIST,
    data
})
// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('	http://127.0.0.1:4523/mock/792764/TodoList').then((res) => {
//             console.log(res);
//             const data = res.data;
//             const action = getListAction(data);
//             dispatch(action);
//         })
//     }
// }
export const getMyListAction = () => ({
    type : GET_MY_LIST,
})