import React, { Component } from 'react'
import { Input, Button, message } from 'antd';
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import "antd/dist/antd.css"
import { login, captcha } from "../api/user"
import "../assets/css/login/index.css"
class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            nickname: "",
            svg: ""


        }
    }
    componentDidMount() {
        captcha().then(res => {
            this.setState({
                svg: res.data.data
            })
        })
    }
    handleIpt(fiedx, e) {
        this.setState({
            [fiedx]: e.target.value
        })

    }
    handleReset() {
        this.setState({
            username: "",
            verification: "",
            password: ""
        })
    }
    handleEntd() {
        let { username, password, verification } = this.state
        if (username === "" && password === "" && verification === "") {

            message.success('输入的信息不能为空', 1);

        }
        else {
            login({username: username,password: password,captcha: verification})
                .then(res => {
                    if (res.data.code === 1) {
                        message.success('登录成功', 1);
                        this.handleReset()
                        this.props.onDispatch({
                            type: "SET_STATE",
                            key: "token",
                            value: res.data.token

                        })
                        this.props.history.replace("/city")

                    }
                    else {
                        message.success(res.data.msg, 1);

                    }
                })
        }

    }
    handleToregister() {
        this.props.history.push("/register")
    }
    render() {
        let { username, password, verification } = this.state
        return (
            <div className="warp">
                <h1>登录</h1>
                <p className="Verification" dangerouslySetInnerHTML={{ __html: this.state.svg }} />
                <Input type="text" value={username} onChange={this.handleIpt.bind(this, "username")} placeholder="请输入用户名"></Input>
                <Input type="password" value={password} onChange={this.handleIpt.bind(this, "password")} placeholder="请输入密码"></Input>
                <Input type="text" value={verification} onChange={this.handleIpt.bind(this, "verification")} placeholder="请输入验证码" className="fication"></Input>
                <Button className="entd" onClick={this.handleEntd.bind(this)}>登录</Button> <Button onClick={this.handleReset.bind(this)}>重置</Button>
                <Button onClick={this.handleToregister.bind(this)}>注册</Button>

            </div>



        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.task.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDispatch(action) {
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register))
