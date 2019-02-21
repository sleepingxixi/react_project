import React from 'react';
import { Card } from 'antd';
import './../ui/ui.less'
import axios from './../../axios/index';

export default class BikeMap extends React.Component {
    state={}
    map = {}
    requestList = () => {
        axios.axios_ajax({
            url: "/map/bike_list",
            baseURL: "https://www.easy-mock.com/mock/5a7278e28d0c633b9c4adbd7/api",
            data: {
                params: this.params
            }
        }).then((res) => {
            if (res.code == 0) {
                this.setState({
                    total_count: res.result.total_count
                })
                this.renderMap(res.result);
            }
        })
    }
    
    componentDidMount() {
        this.requestList();
    }

    // 渲染地图
    renderMap = (res) => {
        let list = res.route_list;
        this.map = new window.BMap.Map("container", { enableMapClick: false });
        let gps1 = list[0].split(',');
        let startPoint = new window.BMap.Point(gps1[0], gps1[1]);
        let gps2 = list[list.length - 1].split(',');
        let endPoint = new window.BMap.Point(gps2[0], gps2[1]);
    }

    addMapControl = () => {
        let map = this.map;
        // 左上角，添加比例尺
        var top_right_control = new BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT });
        var top_right_navigation = new BMap.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT });
        //添加控件和比例尺
        map.addControl(top_right_control);
        map.addControl(top_right_navigation);
        map.enableScrollWheelZoom(true);
        // legend.addLegend(map);

        // 添加地图控件
        this.addMapControl();
    };
    render() {
        return (
            <div>
                <Card className="card_margin"></Card>
                <Card>
                    <div>共有100辆</div>
                    <div id="container" style={{ height: 500 }}></div>
                </Card>
            </div>
        );
    }
}