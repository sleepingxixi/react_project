import React from 'react';
import { Card, Button, notification } from 'antd';
import Util from './../../utils/utils'

export default class Notify extends React.Component{
    openNotify=(type)=>{
        // 尝试使用两种方法进行实现
        // 方法一
        // switch(type){
        //     case 'success':
        //         notification[type]({
        //             message: '提交成功。',
        //             description: '提交时间为：' + Util.formateDate(new Date().getTime())
        //         });
        //         break;
        //     case 'info':
        //         notification[type]({
        //             message: '提交信息如下。',
        //             description: '提交时间为：' + Util.formateDate(new Date().getTime())
        //         });
        //         break;
        //     case 'warning':
        //         notification[type]({
        //             message: '警告',
        //             description: '提交时间为：' + Util.formateDate(new Date().getTime())
        //         });
        //         break;
        //     default:
        //         notification[type]({
        //             message: '提交失败。',
        //             description: '提交时间为：' + Util.formateDate(new Date().getTime())
        //         });
        //         break;

        // 方法二
        let info={
            success:{
                message:'提交成功。',
                placement:'topLeft'
            },
            info: {
                message: '提交信息如下。',
                placement: 'topRight'
            } ,
            warning: {
                message: '警告',
                placement: 'bottomLeft'
            },
            error: {
                message: '提交错误',
                placement: 'bottomRight'
            }
        }
        notification[type]({
            message:info[type].message,
            description: '提交时间为：' + Util.formateDate(new Date().getTime()),
            placement:info[type].placement
        });
    }
    render(){
        return (
            <div>
                <Card title="通知提醒框" className="card_button">
                    <Button type="primary" onClick={()=>this.openNotify('success')}>Success</Button>
                    <Button type="primary" onClick={() =>this.openNotify('info')}>Info</Button>
                    <Button type="primary" onClick={() =>this.openNotify('warning')}>Warning</Button>
                    <Button type="primary" onClick={() =>this.openNotify('error')}>Error</Button>
                </Card>
            </div>
        )
    }
}