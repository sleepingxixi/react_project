import React from 'react';
import './ui.less'
import {Card,Button,message} from 'antd';

export default class Message extends React.Component{
    OpenMessage=(type)=>{
        message[type]("welcom to the system!")
    }
    render(){
        return (
            <Card title="全局提示框" className="card_button">
                <Button type="primary" onClick={()=>this.OpenMessage('success')} >Success</Button>
                <Button type="primary" onClick={()=>this.OpenMessage('info')} >Info</Button>
                <Button type="primary" onClick={()=>this.OpenMessage('error')} >Error</Button>
                <Button type="primary" onClick={()=>this.OpenMessage('warning')} >Warning</Button>
                <Button type="primary" onClick={()=>this.OpenMessage('loading')} >Loading</Button>
            </Card>
        );
    }
}