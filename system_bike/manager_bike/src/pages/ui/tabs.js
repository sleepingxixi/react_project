import React from 'react';
import {Card,Tabs,Icon} from 'antd';
import './ui.less';

const TabPane=Tabs.TabPane;

export default class Tab extends React.Component{
    constructor(props){
        super(props);
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
        this.state={
            tabs_list
        }
    }
    

    render(){
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
                {this.state.tabs_list.map((pane) => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                </Card>
            </div>
        )
    }
}