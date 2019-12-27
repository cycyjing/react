import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { login } from "../../store/action";
import "./index.less";

const mapState = state => {
  return {
    // username: state.userReducer.get("username"),
    // password: state.userReducer.get("password")
    isUser:state.userReducer.get("isUser")
  };
};
@connect(
  mapState,
  { login }
)
class NormalLoginForm extends Component {
 componentDidMount(){
   if(localStorage.getItem("username")){
     // local  storage 肯定不可以放 password  只是做演示哦
    this.props.login({ username: localStorage.getItem("username"), password: localStorage.getItem("username") });
   }
 }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login({ username: values.username, password: values.password });
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    console.log('this.props :', this.props);
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 0
        }
      }
    };
   if(this.props.isUser){
     this.props.history.push('/movie/all')
     return null
   }
    else{
      return (
        <Form
          {...formItemLayout}
          onSubmit={this.handleSubmit}
          className="login-form"
        >
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [{ required: true, message: "Please input your username!" }]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "Please input your Password!" }]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      );
    }

  }
}
const Login = Form.create({ name: "normal_login" })(NormalLoginForm);
export default Login;
