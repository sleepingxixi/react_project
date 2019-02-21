import React from 'react';
import { Card, Carousel } from 'antd';
import './ui.less';
/**
 * 轮播图展示页面
 */
export default class Carousels extends React.Component {

    render() {
        return (
            <div>
                <Card title="文字轮播图" className="card_margin">
                    <Carousel className="carousel_one">
                        <div><h3>First</h3></div>
                        <div><h3>Second</h3></div>
                        <div><h3>Third</h3></div>
                        <div><h3>Four</h3></div>
                    </Carousel>
                </Card>

                <Card title="背景轮播图" className="card_margin">
                    <Carousel className="carousel_two">
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" alt="" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}