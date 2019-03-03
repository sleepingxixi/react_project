import React from 'react';
import { Card, Form, Input, Radio, DatePicker, InputNumber, Select, Switch, TimePicker, Icon, Upload, Checkbox, Button } from 'antd';
import moment from 'moment';
/**
 * 注册的表单
 */
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const { TextArea } = Input;
// 兴趣的可选项
const children = [
    {
        key: '1',
        content: '爬山'
    },
    {
        key: '2',
        content: '游泳'
    },
    {
        key: '3',
        content: '唱歌'
    },
    {
        key: '4',
        content: '绘画'
    }
];
const AllOptions = [];
for (let i = 0; i < children.length; i++) {
    AllOptions.push(<Option key={children[i].key}>{children[i].content}</Option>)
}
// 上传头像的方法，添加监听事件，确保上传头像完成
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class Regist extends React.Component {
    state = {
        loading: false
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    }
    handleSubmit = () => {
        let regist_info = this.props.form.getFieldsValue();
        console.log(JSON.stringify(regist_info));
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        // 设置表单标签和内容的布局，以及当页面缩小后的布局
        const formItemLayout = {
            labelCol: {
                xs: 24,
                sm: 4
            },
            wrapperCol: {
                xs: 24,
                sm: 16
            }
        }

        // 设置没有label的表单项的布局
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4
                }
            }
        }
        // 设置上传前后和过程中的图标
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;

        return (
            <div>
                <Card title="注册表单">
                    <Form >
                        <FormItem label="用户名" {...formItemLayout} >
                            {getFieldDecorator('userName', {
                                rules: [
                                    { required: true, message: '名字不能为空' }
                                ],
                            })(
                                <Input placeholder="UserName" style={{ maxWidth: 400 }}></Input>
                            )}
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {getFieldDecorator('password', {
                                rules: [
                                    { required: true, message: '密码不能为空' },
                                    { min: 8, message: "密码不能小于8位" }],
                            })(
                                <Input placeholder="PassWord" type="password" style={{ maxWidth: 400 }}></Input>
                            )}
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {getFieldDecorator('gender', {
                                rules: [
                                    { required: true, message: '必须填写性别' }
                                ]
                            })(
                                <RadioGroup>
                                    <Radio value={1}>男</Radio>
                                    <Radio value={2}>女</Radio>
                                </RadioGroup>
                            )}
                        </FormItem>
                        <FormItem label="出生日期" {...formItemLayout}>
                            {getFieldDecorator('birthday', {
                                rules: [
                                    { required: true, message: '必须填写日期' }
                                ]
                            })(
                                <DatePicker />
                            )}
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {getFieldDecorator('age', {
                                initialValue: 18
                            })(
                                <InputNumber max={150} />
                            )}
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {getFieldDecorator('currentState', {
                                initialValue: '1'
                            })(
                                <Select style={{ maxWidth: 400 }}>
                                    <Option value="1">咸鱼一条</Option>
                                    <Option value="2">风流浪子</Option>
                                    <Option value="3">单身贵族</Option>
                                    <Option value="4">北方才子</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {getFieldDecorator('hobby', {
                                initialValue: '1'
                            })(
                                <Select style={{ maxWidth: 400 }} mode="multiple">
                                    {AllOptions}
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {getFieldDecorator('marrige', {
                            })(
                                <Switch defaultChecked />,
                            )}
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout} >
                            {getFieldDecorator('address', {
                            })(
                                <TextArea placeholder="北京海淀区" autosize={{ minRows: 2, maxRows: 6 }} style={{ maxWidth: 600 }} />
                            )}
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {getFieldDecorator('morningTime', {
                            })(
                                <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />,
                            )}
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="//jsonplaceholder.typicode.com/posts/"
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </FormItem>
                        <FormItem  {...offsetLayout}>
                            <Checkbox>我已经阅读<a href="#">学习条约</a></Checkbox>
                        </FormItem>
                        <FormItem  {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(Regist);
