import React from 'react';
import { Row, Col } from 'antd';
import Util from '../../utils/utils'
import './index.less'
import Axios from '../../axios';
import { connect } from 'react-redux';

class Header extends React.Component {

    // 默认添加用户名，设置定时
    componentWillMount() {
        this.setState({
            userName: 'sleeping'
        })
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
        this.getWeatherAPIData();
    }

    // 通过百度天气接口获取天气
    getWeatherAPIData() {
        let city = '北京';
        Axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res) => {
            if (res.status == 'success') {
                let data = res.results[0].weather_data[0];
                this.setState({
                    weather_pic: data.dayPictureUrl,
                    weather: data.weather
                })
            }
        })
    }

    render() {
        const not_menu = this.props.menuType;
        // 由于页面头部有两种展示形式，因此通过not_menu值判断选取的样式
        return (
            <div className="header">
                {not_menu ?
                    <Row className="header_top">
                        <Col span={6} className="detail_logo">
                            <a href="#/order"><img src="./assets/logo-ant.svg" alt="" /></a>
                            <span>Test</span>
                        </Col>
                        <Col span={18} >
                            <span>欢迎，{this.state.userName}</span>
                            <a href="#">退出</a>
                        </Col>
                    </Row>
                    :
                    <div>
                        <Row className="header_top">
                            <Col span={24} >
                                <span>欢迎，{this.state.userName}</span>
                                <a href="#">退出</a>
                            </Col>
                        </Row>
                        <Row className="breadcrumb">
                            <Col span={4} className="breadcrumb_title">
                                <span>{this.props.menuName}</span>
                            </Col>
                            <Col span={20} className="weather">
                                <span className="date">{this.state.sysTime}</span>
                                <span className="weather_detail">
                                    <img src={this.state.weather_pic} alt="weather_pic" />
                                    {this.state.weather}</span>
                            </Col>
                        </Row>
                    </div>
                }
            </div>
        )
    }
}

// 获取面包屑的结果
const mapStateToProps = state => {
    return {
        menuName: state.menuName
    }
}
export default connect(mapStateToProps)(Header);