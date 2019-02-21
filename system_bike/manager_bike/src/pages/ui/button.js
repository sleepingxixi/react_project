import React from 'react';
import './ui.less';
import { Card, Button, Icon, Radio } from 'antd';

export default class Buttons extends React.Component {

    state = {
        loading: true,
        size: 'default'
    }

    handleLoading = () => {
        this.setState({
            loading: false
        })
    }

    // 用于选择不同按钮的时候，统一设置不同的大小
    handleSize = (s) => {
        this.setState({
            size: s.target.value
        })
    }

    render() {
        const size = this.state.size;
        return (
            <div>
                <Card title="基础按钮" className="card_button card_margin">
                    <Button type="primary">主按钮</Button>
                    <Button>默认按钮</Button>
                    <Button type="dashed">虚线按钮</Button>
                    <Button type="danger">特殊按钮</Button>
                </Card>

                <Card title="图形按钮" className="card_button card_margin">
                    <Button icon="plus">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="edit">修改</Button>
                    <Button shape="circle" icon="search" ></Button>
                    <Button icon="search" type="primary">搜索</Button>
                    <Button icon="download">下载</Button>
                </Card>

                <Card title="loading按钮" className="card_button card_margin">
                    <Button type="primary" loading={this.state.loading}>loading</Button>
                    <Button shape="circle" type="primary" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>加载中</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button onClick={this.handleLoading}>关闭</Button>
                </Card>

                <Card title="按钮组" className="card_margin">
                    <Button.Group>
                        <Button type="primary">
                            <Icon type="left" />上一步
                        </Button>
                        <Button type="primary">
                            下一步<Icon type="right" />
                        </Button>
                    </Button.Group>
                </Card>

                <Card title="按钮尺寸" className="card_button">
                    <Radio.Group value={size} onChange={this.handleSize}>
                        <Radio value="large">大</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="small">小</Radio>
                    </Radio.Group>
                    <Button type="primary" size={size} style={{ marginLeft: 10 }}>主按钮</Button>
                    <Button size={size}>默认按钮</Button>
                    <Button type="dashed" size={size}>虚线按钮</Button>
                    <Button type="danger" size={size}>特殊按钮</Button>
                </Card>
            </div>
        )
    }
}