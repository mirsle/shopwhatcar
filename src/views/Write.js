import React, { Component } from 'react'
import {create} from "../api/order"
import {Button} from "antd"
import "../assets/css/write/forms.css"
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux'
class Write extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            collectname:"",
            collectads:"",
            collectphone:""
        }
    }
    handleReturn()
    {
        this.props.history.go(-1)
    }
    handleFiles(Files,e)
    {
        this.setState({
            [Files]:e.target.value
        })
    }
    handleSubimt()
    {
        let {token,count,id,storeid} = this.props
        let {collectname,collectads,collectphone}  = this.state
        create( { 
                    token:token,
                    cart:JSON.stringify([{
                        goods_id:id,
                        sku:"",
                        count:count
                    }]),
                    receiver_name:collectname,
                    receiver_address:collectads,
                    receiver_phone:collectphone,
                    store_id:storeid
                    
            } ).then(res=>{
                console.log(res)
                this.props.history.push("/order")
            })
    }
    render() {
        let {count,token,name} = this.props
        let {collectphone,collectads,collectname} = this.state
        return (
            <div className="forms"> 
             <header>
                <Button onClick={this.handleReturn.bind(this)}>返回</Button>
                 <span className="title">填写订单</span>
             </header>
               <main>
               <p><span>商品名称:</span><span>{name}</span><span>X{count}</span></p>
                <p><b>收件姓名:</b><input type="text" value={collectname} onChange={this.handleFiles.bind(this,"collectname")}></input></p>
                <p><b>收件地址:</b><input type="text"value={collectads}  onChange={this.handleFiles.bind(this,"collectads")}></input></p>
                <p><b>收件人电话:</b><input type="text" value={collectphone}  onChange={this.handleFiles.bind(this,"collectphone")}></input></p>
                <p><b>取机方式:</b><input ></input></p>
                <p><b>租赁时间:</b><input></input></p>
                <p><b>选择网点:</b><input></input></p>
                <p><b>租赁价格:</b><input></input></p>
                <p><b>押金:</b><input></input></p>
                <p><b>联系人:</b><input></input></p>
                <p><b>手机号:</b><input></input></p>
                <p className="shopbuy">
                      <strong className="shopaddsub">
                      </strong>
                      <strong className="shoptobuy" onClick={this.handleSubimt.bind(this)}>支付订单</strong>
                  </p>
                </main>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.task.count,
        name:state.task.name,
        token:state.task.token,
        id:state.task.id,
        storeid:state.task.storeid
    }
}
export default connect(mapStateToProps) (withRouter(Write))