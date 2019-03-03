/**
 * 是按钮触发的行为
 */

export const type = {
    SWITCH_MENU: 'SWITCH_MENU'
}

export function switchMenu(menuName) {
    return {
        type: type.SWITCH_MENU,
        menuName
    }
}