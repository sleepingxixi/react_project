import React from 'react';
import {Card,Spin,Icon, Alert} from 'antd';
import './ui.less';
import ui_model from './ui_module.css';

const ant_load_icon = <Icon type='loading' style={{fontSize:24}}/>

export default class Loadings extends React.Component{
    render(){
        return (
            <div>
                <Card title="加载符号" className="card_spin card_margin">
                    <Spin size="small"></Spin>
                    <Spin ></Spin>
                    <Spin size="large"></Spin>
                    <Spin indicator={ant_load_icon}></Spin>
                </Card>
                <Card title="页面上的加载">
                    <Alert
                        message="这是提示信息"
                        description="哈哈哈哈，用来显示信息信息"
                        type="warning"
                        className={ui_model.alert_margin}
                    />
                    <Spin>
                        <Alert 
                        message="这是提示信息"
                        description="哈哈哈哈，用来显示信息信息"
                        type="info"
                        className={`${ui_model.alert_margin}`}
                        />
                    </Spin>
                    <Spin tip="Loading" >
                        <Alert
                            message="这是提示信息"
                            description="哈哈哈哈，用来显示信息信息"
                            type="info"
                            className={ui_model.alert_margin}
                        />
                    </Spin>
                    <Spin tip="Loading" indicator={ant_load_icon} >
                        <Alert
                            message="这是提示信息"
                            description="哈哈哈哈，用来显示信息信息"
                            type="info"
                            className={ui_model.alert_margin}
                        />
                    </Spin>
                </Card>
            </div>
        );
    }
}