const defaultState = {
    inputValue : 'Write Something',
    list : [
        '上午学习英语',
        '下午学习react',
        '晚上敲代码',
    ]
}
export default (state = defaultState, action) => {
    {
        if(action.type === 'changeInput') {
            let newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;

        }
    }
    return state;
}