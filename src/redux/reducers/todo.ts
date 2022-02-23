interface Action {
    text: string,
    type: string
}
const initialState = {
    list: []
}

export default function todos(state: any = initialState, action: Action) {
    let { text = 'str' } = action;
    switch (action.type) {
        case 'ADD_TODO':
            console.log(action, state.list, 'aaa')
            state.list.concat(text)
            console.log(state.list)
            return { ...state, list: state.list }
        // state.list.concat([text])
        default:
            return state
    }
}
