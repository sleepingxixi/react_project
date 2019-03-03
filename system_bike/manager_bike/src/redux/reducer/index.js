/**
 * 主要用来处理业务
 * 数据处理
 */
import { type } from './../action/index'

//  初始化状态
const initialState = {
    menuName: '首页'
}


// 导出默认函数，需要传入两个参数
export default (state = initialState, action) => {
    switch (action.type) {
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName: action.menuName
            }
        default:
            return {
                ...state
            }
    }
}