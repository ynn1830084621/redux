import { takeEvery, put } from 'redux-saga/effects';
import { GET_MY_LIST } from './actionType.js'
import axios from 'axios';
import { getListAction } from './actionCreactor';


//generator函数
function* mySagas() {
    yield takeEvery(GET_MY_LIST, getList)
};
function* getList() {
    // axios.get('	http://127.0.0.1:4523/mock/792764/TodoList').then((res) => {
    //         console.log(res);
    //         const data = res.data;
    //         const action = getListAction(data);
    //         dispatch(action);
    //     })
    const res = yield axios.get("http://127.0.0.1:4523/mock/792764/TodoList");
    const action = yield getListAction(res.data);
    yield put(action);
}
export default mySagas;