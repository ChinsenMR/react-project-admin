import { type } from '../actions';

const initialState = {
    menuName: ['首页']
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case type.SWITCH_MENU:
            return {
                menuName: action.menuName
            };
        default:
            return state;
    }
}