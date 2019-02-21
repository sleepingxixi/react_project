import React from 'react';
import { Card, Table, Modal, Button, message} from 'antd';
// import axios from 'axios';
import './../ui/ui.less'
import axios from './../../axios/index';
import Utils from './../../utils/utils'

export default class BasicTable extends React.Component{
    state={}
    params={
        page:1
    }
    
    requiredDate = () => {
        let _this = this;
        // 方法一：直接调用axios插件进行调用
        // const commonUrl =" https://www.easy-mock.com/mock/5c6933e51dbe7c1a4f7dd90f/sleeping";
        // axios.get(commonUrl +'/table/list1').then((res)=>{
        //     if(res.status === 200 && res.data.code === 0){
        //         debugger;
        //         this.setState({
        //             Dynamic_data:res.data.result.list
        //         })
        //     }
        // })
        // 方法二：将此方法进行封装，便于更好的进行错误拦截
        axios.axios_ajax({
            url: '/table/list1',
            data:{
                params:{
                    page:this.params.page
                },
                isShowLoading:true
            }
        }).then((res)=>{
            if(res.code=='0'){
                res.result.list.map((item,index)=>{
                    item.key=index;
                })
                this.setState({
                    Dynamic_data: res.result.list,
                    // 每次重新加载需要重置一下
                    selectedRowKeys:[],
                    selecedtItem:null,
                    pagination:Utils.pagination(res,(current)=>{
                        //to-do
                        _this.params.page=current;
                        this.requiredDate();
                    })
                })
            }
        })
    }

    componentDidMount(){
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
    handleDelete=()=>{
        let rows=this.state.selectedRows;
        let ids=[];
        rows.map((item)=>{
            ids.push(item.id);
        })
        Modal.confirm({
            title:"删除信息",
            content:`选中需要删除的信息为：${ids.join('、')}`,
            onOk:()=>{
                message.success('删除成功');
                this.requiredDate();
            }
        })
    }
    render(){
        const data=[
            {
                id:'1',
                userName:'张三',
                birthday:'2015-02-15',
                hobby:'1'
            },
            {
                id: '2',
                userName: '李四',
                birthday: '2013-02-15',
                hobby: '2'
            },
            {
                id: '3',
                userName: '王五',
                birthday: '2019-02-5',
                hobby: '3'
            }
        ]
        data.map((item,index)=>{
            item.key=index
        })
        // 可以通过render对返回的数字进行映射处理
        const columns=[
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '出生日期',
                dataIndex: 'birthday'
            },
            {
                title: '兴趣爱好',
                dataIndex: 'hobby',
                render(hobby){
                    let hobby_list={
                        '1':'摄影',
                        '2':'绘画',
                        '3':'篮球',
                        '4':'唱歌',
                        '5':'旅行'
                    }
                    return hobby_list[hobby];
                }
            }
        ];

        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection={
            type:'radio',
            selectedRowKeys
        }
       
        const rowCheckSelection ={
            type:'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
            }
        }
        return (
            <div>
                <Card title="基础表格" className="card_margin">
                    <Table 
                    columns={columns} 
                    dataSource={data}
                    bordered
                    pagination={false}
                    ></Table>
                </Card>
                <Card title="动态渲染数据表格" className="card_margin">
                    <Table
                        columns={columns}
                        dataSource={this.state.Dynamic_data}
                        bordered
                        pagination={false}
                    ></Table>
                </Card>
                <Card title="单选的表格" className="card_margin">
                    <Table
                        rowSelection={rowSelection}
                        columns={columns}
                        dataSource={this.state.Dynamic_data}
                        bordered
                        pagination={false}
                        onRow={(record,index) => {
                            return {
                                onClick: ()=>{this.onRowClick(record,index)}
                            };
                        }}
                    ></Table>
                </Card>
                <Card title="多选的表格" className="card_margin">
                <Button type="primary" onClick={this.handleDelete} style={{marginBottom:10}}>删除</Button>
                    <Table
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.Dynamic_data}
                        bordered
                        pagination={false}
                    ></Table>
                </Card>
                <Card title="包含分页的表格" className="card_margin">
                    <Table
                        rowSelection={rowCheckSelection}
                        columns={columns}
                        dataSource={this.state.Dynamic_data}
                        bordered
                        pagination={this.state.pagination}
                    ></Table>
                </Card>
            </div>
        )
    }
}