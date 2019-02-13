import React from 'react';
import {Card,Button} from 'antd';
import './ui.less';

export default class Modals extends React.Component{
    render(){
        return (
            <div>
                <Card title="基础模态框" className="card_button card_margin">
                    <Button type="primary">Open</Button>
                    <Button type="primary">自定义页脚</Button>
                    <Button type="primary">顶部20px弹框</Button>
                    <Button type="primary">水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card_button">
                    <Button type="primary">Confirm</Button>
                    <Button type="primary">Info</Button>
                    <Button type="primary">Success</Button>
                    <Button type="primary">Error</Button>
                    <Button type="primary">Warning</Button>
                </Card>
            </div>
        )
    }

}