import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchMenu } from './../../redux/action';
import menuConfig from './../../config/menuConfig';
import './index.less'


const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;
class NavLeft extends React.Component {
    // 设置菜单默认选中为空
    state = {
        currentKey: []
    }

    // 使用react框架生命周期的自带方法
    componentWillMount() {
        // 用来截取路由，去除#和？后面的内容
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
        let currentArray=[];
        currentArray.push(currentKey);
        // 通过读取menuconfig对象，调用renderMenu方法获取菜单树
        const menu_tree_node = this.renderMenu(menuConfig);
        this.setState({
            menu_tree_node: menu_tree_node,
            currentKey: currentArray
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
            return <MenuItem key={item.key} title={item.title}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </MenuItem>
        })
    }

    // 为菜单绑定点击事件，通过向redux中action的方法传入对应的title，以及获取对应的menu中key值
    handleClick = ({ item, key }) => {
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title))
        let keys=[];
        keys.push(key);
        this.setState({
            currentKey: keys
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="logo"></img>
                    <h1>Test</h1>
                </div>
                <Menu
                    theme="dark"
                    mode="vertical"
                    className="menuList"
                    selectedKeys={this.state.currentKey}
                    onClick={this.handleClick}
                >
                    {this.state.menu_tree_node}
                </Menu>
            </div>
        )
    }
}

export default connect()(NavLeft);