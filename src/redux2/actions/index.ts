export const type = {
    SWITCH_MENU: 'SWITCH_MENU'
};

export function switchMenu(menuName: string) {
    return {
        type: type.SWITCH_MENU,
        menuName
    }
}