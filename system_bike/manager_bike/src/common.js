import React from 'react';
import {Row} from 'antd';
import Header from './components/Header/index';
import './style/common.less'

export default class Common extends React.Component{

    render(){
        return (
            <div>
                <Row className="detail_page">
                    <Header menuType='not_menu' className="detail_menu"/>
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </div>
        )
    }
}