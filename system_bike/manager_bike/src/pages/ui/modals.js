import React from 'react';
import { Card, Button, Modal } from 'antd';
import './ui.less';

export default class Modals extends React.Component {
    state = {
        show1: false,
        show2: false,
        show3: false,
        show4: false
    }
    handleModals = (type) => {
        this.setState({
            [type]: true
        })
    }
    handleOk=()=>{
        this.setState({
            show1: false,
            show2: false,
            show3: false,
            show4: false
        })
    }
    handleCancel=()=>{
        this.setState({
            show1: false,
            show2: false,
            show3: false,
            show4: false
        })
    }

    // 对于确认的弹框，不需要自己绑定显示和隐藏事件，且可以绑定后期操作事件
    handleConfirm=(type)=>{
        Modal[type]({
            title:'条件确认',
            content:'你确定已经学会了吗？',
            onCancel(){
                console.log('cancel')
            },
            onOk(){
                console.log('ok')
            }
        })
    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card_button card_margin">
                    <Button type="primary" onClick={() => this.handleModals('show1')} >Open</Button>
                    <Button type="primary" onClick={() => this.handleModals('show2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleModals('show3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleModals('show4')}>水平垂直居中</Button>
                </Card>
                <Modal
                    title='Open'
                    visible={this.state.show1}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                <p>这是一个用来练习的模态窗口哦！</p>
                </Modal>
                <Modal
                    title='自定义页脚'
                    visible={this.state.show2}
                    okText='gogogo'
                    cancelText='不玩了'
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>这是一个用来练习的模态窗口哦！</p>
                </Modal>
                <Modal
                    title='顶部20px弹框'
                    visible={this.state.show3}
                    style={{top:20}}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>这是一个用来练习的模态窗口哦！</p>
                </Modal>

                {/* 需要在外层添加一个新的class，并补充样式 */}
                <Modal
                    title='水平居中弹框'
                    visible={this.state.show4}
                    wrapClassName='vertical-center-modal'
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>这是一个用来练习的模态窗口哦！</p>
                </Modal>

                <Card title="信息确认框" className="card_button">
                    <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('warning')}>Warning</Button>
                </Card>
            </div>
        )
    }

}