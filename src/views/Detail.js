import React, { Component } from 'react'
import {detail} from "../api/commodity"
import {Button} from "antd"
import {withRouter} from "react-router-dom"
import "../assets/css/detail/detail.css"
class Detail extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            shopdetail:[]
        }
    }
    componentDidMount()
    {
        detail({goods_id:this.props.match.params.detailId}).then(res=>{
            console.log(res.data)
            this.setState({
                shopdetail:res.data.result
            })
        })
       
       
    }
    handleReturn()
    {
        this.props.history.go(-1)
    }
    render() {
              
      let {shopdetail} = this.state
        return (
            <div className="detail">
              <header>
                  <Button onClick={this.handleReturn.bind(this)}>返回</Button>
                  <span className="ocons">商品详情</span>
              </header>
              <main>
                  <img></img>
                  <p className="shopname">{shopdetail.goods_name}</p>
                  <p className="shopprice">￥{shopdetail.market_price}/天 <span>押金/{shopdetail.price}</span></p>
                  <p className="shopbuy">
                      <span className="shopaddsub"></span>
                      <span className="shoptobuy"></span>
                  </p>
              </main>
              <footer></footer>
            </div>
        )
    }
}
export default  withRouter(Detail)
