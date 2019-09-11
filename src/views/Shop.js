/*
 * @Author: 马新杰 
 * @Date: 2019-09-11 21:16:23 
 * @Last Modified by:   马新杰 
 * @Last Modified time: 2019-09-11 21:16:23 
 */
import React, { Component } from 'react'
import {gooslist} from "../api/commodity"
import "../assets/css/shop/shop.css"
import {withRouter} from "react-router-dom"
class Shop extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            list:[]
        }
    }
    componentDidMount()
    {
        gooslist({store_id:this.props.match.params.id}).then(res=>{
            if(res.data.code===1)
            {
                console.log(res)
                this.setState({
                    list:res.data.result
                })
            }
        })
    }
    handleToDetail(goods_id)
    {
        this.props.history.push(`/detail/${goods_id}`)
    }
    render() {
            let {list} = this.state
        return (
            <div className="list">
                <h1>{this.props.match.params.name}</h1>
                {list.map((item,index)=>{
                    return <div className="shopitem" key={index} onClick={this.handleToDetail.bind(this,item.goods_id)}>
                            <div className="left">
                                <p>商品名称{item.goods_name}</p>
                                <p className="price">商品价格:￥{item.market_price}/天</p>
                                <p>商品简介{item.detail}</p>
                            </div>
                            <div className="right">
                                <img></img>
                            </div>
                    </div>
                })}
            </div>
        )
    }
}
export default withRouter(Shop)
