import React from 'react';
import { Card, Row, Col, Modal } from 'antd';

/**
 * 图片展示页面
 * 主要原理：假设目前有24张图片在指定文件夹下，通过将页面展示部分分成5列，每列5张图片，最后一列4张图片，原因在于栅格布局最多只能分成24块。
 * 通过card展示图片
 * 点击图片时通过调用modal窗口进行弹出展示
 */
export default class Gallery extends React.Component {
    // 默认弹框样式为false
    state = {
        visible: false
    }

    // 用于点开图片时获取相关信息
    openImg = (imgSrc) => {
        this.setState({
            visible: true,
            imgSrc: "/gallery/" + imgSrc
        })
    }
    render() {

        const imgs = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['11.png', '12.png', '13.png', '14.png', '15.png'],
            ['16.png', '17.png', '18.png', '19.png', '20.png'],
            ['21.png', '22.png', '23.png', '24.png']
        ];
        // 通过读取二维数组方式为每张图片设置相应的样式和展示信息
        const img_list = imgs.map((list) => list.map((item) =>
            <Card hoverable
                cover={<img src={"/gallery/" + item} alt="" onClick={() => this.openImg(item)} />}
                style={{ marginBottom: 10 }}
            >
                <Card.Meta
                    title="图片展示"
                    description="这些图片都非常好看"
                />
                {console.log(item)}
            </Card>
        ));

        return (
            <div>
                <Row gutter={10}>
                    <Col md={5}>
                        {img_list[0]}
                    </Col>
                    <Col md={5}>
                        {img_list[1]}
                    </Col>
                    <Col md={5}>
                        {img_list[2]}
                    </Col>
                    <Col md={5}>
                        {img_list[3]}
                    </Col>
                    <Col md={4}>
                        {img_list[4]}
                    </Col>
                </Row>
                <Modal
                    title="图片单独展示"
                    visible={this.state.visible}
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                    footer={null}
                >
                    <img src={this.state.imgSrc} alt="" style={{ width: '100%' }} />
                </Modal>
            </div>
        );
    }
}