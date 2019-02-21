import React from 'react';
import { Card, Tabs, Icon } from 'antd';
import './ui.less';

const TabPane = Tabs.TabPane;

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        let tabs_list = [
            {
                key: '1',
                title: 'Tab 1',
                content: '这只是用来练习的，哈哈哈1'
            },
            {
                key: '2',
                title: 'Tab 2',
                content: '这只是用来练习的，哈哈哈2'
            },
            {
                key: '3',
                title: 'Tab 3',
                content: '这只是用来练习的，哈哈哈3'
            }
        ];
        this.state = {
            activeKey: tabs_list[0].key,
            tabs_list
        }
    }

    // 主要用于设置可编辑的tab的功能
    // 当切换的时候获取当前的tab
    onChange = (activeKey) => {
        this.setState({ activeKey });
    }


    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    // 添加tab
    add = () => {
        const panes = this.state.tabs_list;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ tabs_list: panes, activeKey });
    }

    // 删除tab
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.tabs_list.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.tabs_list.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ tabs_list: panes, activeKey });
    }

    render() {
        return (
            <div>
                <Card title="tabs标签" className="card_margin">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Tab 1" key="1">这只是用来练习的，哈哈哈1</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>这只是用来练习的，哈哈哈2</TabPane>
                        <TabPane tab="Tab 3" key="3">这只是用来练习的，哈哈哈3</TabPane>
                    </Tabs>
                </Card>

                <Card title="带图标的tabs标签" className="card_margin">
                    <Tabs defaultActiveKey="1">
                        <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">这只是用来练习的，哈哈哈1</TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab 2</span>} key="2">这只是用来练习的，哈哈哈2</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 3</span>} key="3">这只是用来练习的，哈哈哈3</TabPane>
                    </Tabs>
                </Card>

                <Card title="可编辑的tabs标签" className="card_margin">
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {this.state.tabs_list.map((pane) => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                    </Tabs>
                </Card>
            </div>
        )
    }
}