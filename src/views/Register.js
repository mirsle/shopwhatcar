import React, { Component } from 'react'
import { Input, Button,message } from 'antd';
import {withRouter} from "react-router-dom"
import "antd/dist/antd.css"
import "../assets/css/register/index.css"
import {register} from "../api/user"
 class Register extends Component {
    constructor(props)
    {
        super(props)
      
            this.state = {
                username:"",
                password:"",
                nickname:""
                
        
        }
    }
    handleReset(){
        this.setState({
            username:"",
            nickname:"",
            password:""
        })
    }
    handleIpt(fiedx,e)
    {
         this.setState({
             [fiedx]:e.target.value
         })
         
    }
    handleTologin()
    {
        this.props.history.push("/login")
    }
    handleEntd()
    {
        let {username,password,nickname}  = this.state
        if(username===""&&password===""&&nickname==="")
        {
           
                message.success('输入的信息不能为空',1);
             
        }
        else{
            register({username:username,password:password,nickname:nickname}).then(res=>{
            if(res.data.code===1)
            {
                message.success('注册成功',1);
                this.props.history.replace("/login")
                
            }
            else{
                message.success(res.data.msg,1);
               
            }
        })
    }
   
    }
    render() {
        let {username,password,nickname}  = this.state
        return (
            <div className="warp">
                <h1>注册</h1>
                <Input type="text" value={username} onChange={this.handleIpt.bind(this,"username")} placeholder="请输入用户名"></Input>
                <Input type="password" value={password} onChange={this.handleIpt.bind(this,"password")} placeholder="请输入密码"></Input>
                <Input type="text" value={nickname} onChange={this.handleIpt.bind(this,"nickname")} placeholder="请输入昵称"></Input>
                <Button className="entd" onClick={this.handleEntd.bind(this)}>提交</Button> <Button onClick={this.handleReset.bind(this)}>重置</Button>
                 <Button onClick={this.handleTologin.bind(this)}>登录</Button>
                
            </div>
        )
    }
} 
export default withRouter(Register)
