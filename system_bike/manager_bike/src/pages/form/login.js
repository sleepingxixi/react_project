import React from 'react';
import { Card, Form, Input, Button, Checkbox, message,Icon } from 'antd';
import './../ui/ui.less'

const FormItem = Form.Item;
class LoginForm extends React.Component {
    checkInfo = () => {
        // 能够获取表单里的提交信息
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName}恭喜您，您已完成表单提交。`)
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="行内登录表单" className="card_margin">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="UserName"></Input>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="PassWord" type="password"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary"
                                htmlType="submit">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="默认登录表单">
                    <Form style={{ width: 300 }}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [
                                    { required: true, message: 'Please input your username!' },
                                    { pattern:/^[a-zA-Z]$/g, message:'用户名必须只能是字母'}
                                ],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}}/>} placeholder="UserName"></Input>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [
                                    { required: true, message: 'Please input your Password!' },
                                    { min: 8, message: "密码不能小于8位" }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="PassWord" type="password"></Input>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remeber me</Checkbox>
                            )}
                            <a href="" style={{ float: 'right' }}>Forgot password</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary"
                                htmlType="submit" onClick={this.checkInfo}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(LoginForm);