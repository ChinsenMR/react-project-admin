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
    
            state.list = state.list.concat(text)
            console.log(state, 'add .')
            return state.list
        // state.list.concat([text])
        default:
            return state
    }
}
