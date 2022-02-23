const initialState = {
    counter: 0
}

export default function counter(state: any = initialState, action: any) {
    switch (action.type) {
        case 'INCREMENT':
            return state.counter + 1
        case 'DECREMENT':
            return state.counter - 1
        default:
            return state
    }
}
