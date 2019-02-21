import React from 'react';
import { Card, Table, Modal, Button, message } from 'antd';
import './../ui/ui.less'
import axios from '../../axios/index';
import Utils from '../../utils/utils'

export default class SuperTable extends React.Component {
    state={}
    params = {
        page: 1
    }
    componentDidMount() {
        this.requiredDate();
    }
    onRowClick = (record, index) => {
        let selectKeys = [index];
        // 用来测试获取的信息
        // Modal.info({
        //     title:"信息",
        //     content:`"用户名："${record.userName},"爱好："${record.hobby}`
        // })
        this.setState({
            selectedRowKeys: selectKeys,
            selecedtItem: record
        })
    }
    requiredDate = () => {
        let _this = this;
        // 方法二：将此方法进行封装，便于更好的进行错误拦截
        axios.axios_ajax({
            url: '/table/list2',
            data: {
                params: {
                    page: this.params.page
                },
                isShowLoading: true
            }
        }).then((res) => {
            if (res.code == '0') {
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    Dynamic_data: res.result.list,
                    // 每次重新加载需要重置一下
                    selectedRowKeys: [],
                    selecedtItem: null,
                    pagination: Utils.pagination(res, (current) => {
                        //to-do
                        _this.params.page = current;
                        this.requiredDate();
                    })
                })
            }
        })
    }
    onChange = (pagination, filters, sorter)=>{
        this.setState({
            sortOrder: sorter.order
        })
    }
    render(){
        // 可以通过render对返回的数字进行映射处理
        // 当设置内容滚动的时候，标题会不对齐，因此需要设置宽度
        const columns = [
            {
                title: 'id',
                width:80,
                dataIndex: 'id'
            },
            {
                title: '用户名',
                width: 80,
                dataIndex: 'userName'
            },
            {
                title: '出生日期',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '兴趣爱好',
                width: 120,
                dataIndex: 'hobby',
                render(hobby) {
                    let hobby_list = {
                        '1': '摄影',
                        '2': '绘画',
                        '3': '篮球',
                        '4': '唱歌',
                        '5': '旅行'
                    }
                    return hobby_list[hobby];
                }
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'gender',
                render(gender) {
                    let gender_list = {
                        '1': '男',
                        '2': '女'
                    }
                    return gender_list[gender];
                }
            },
            {
                title: '是否已婚',
                width: 80,
                dataIndex: 'marriged',
                render(marriged) {
                    let marriged_list = {
                        '1': '是',
                        '2': '否'
                    }
                    return marriged_list[marriged];
                }
            },
            {
                title: '年龄',
                width: 80,
                dataIndex: 'age',
                sortOrder: this.state.sortOrder,
                sorter: (a, b) => a.age - b.age
            }
        ];

        const columns2 = [
            {
                title: 'id',
                width: 80,
                fixed: 'left',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                width: 80,
                fixed: 'left',
                dataIndex: 'userName'
            },
            {
                title: '出生日期',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '出生日期',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '出生日期',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '出生日期',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '出生日期',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '出生日期',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '出生日期',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '出生日期',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '出生日期',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '出生日期',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '出生日期',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '兴趣爱好',
                width: 120,
                dataIndex: 'hobby',
                render(hobby) {
                    let hobby_list = {
                        '1': '摄影',
                        '2': '绘画',
                        '3': '篮球',
                        '4': '唱歌',
                        '5': '旅行'
                    }
                    return hobby_list[hobby];
                }
            },
            {
                title: '性别',
                width: 80,
                dataIndex: 'gender',
                render(gender) {
                    let gender_list = {
                        '1': '男',
                        '2': '女'
                    }
                    return gender_list[gender];
                }
            },
            {
                title: '是否已婚',
                width: 80,
                dataIndex: 'marriged',
                render(marriged) {
                    let marriged_list = {
                        '1': '是',
                        '2': '否'
                    }
                    return marriged_list[marriged];
                }
            },
            {
                title: '年龄',
                width: 80,
                dataIndex: 'age',
            }
        ];
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
            <Card title="头部固定的表格" className="card_margin">
                <Table
                    columns={columns}
                    dataSource={this.state.Dynamic_data}
                    bordered
                    pagination={this.state.pagination}
                    scroll={{y:240}}
                ></Table>
            </Card>
            <Card title="左侧固定" className="card_margin">
                <Table
                    columns={columns2}
                    dataSource={this.state.Dynamic_data}
                    bordered
                    pagination={false}
                    scroll={{x:1700}}
                ></Table>
            </Card>
            <Card title="排序" className="card_margin">
                <Table
                    columns={columns}
                    dataSource={this.state.Dynamic_data}
                    bordered
                    pagination={false}
                    onChange={this.onChange}
                ></Table>
            </Card>
            </div>
        );
    }
}