import React from 'react';
import { Menu } from 'antd';
import menuConfig from './../../config/menuConfig';
import './index.less'


const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
    // 使用react框架生命周期的自带方法
    componentWillMount() {
        const menu_tree_node = this.renderMenu(menuConfig);
        this.setState({
            menu_tree_node: menu_tree_node
        });
    }

    // 使用递归，渲染菜单栏
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (<SubMenu key={item.key} title={item.title}>
                    {this.renderMenu(item.children)}
                </SubMenu>);
            }
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="logo"></img>
                    <h1>Test</h1>
                </div>
                <Menu theme="dark" mode="vertical" className="menuList">
                    {this.state.menu_tree_node}
                </Menu>
            </div>
        )
    }
}