import React, { Component } from 'react'
import {detail} from "../api/commodity"
import {Button} from "antd"
import {withRouter} from "react-router-dom"
import {connect} from "react-redux"
import "../assets/css/detail/detail.css"
class Detail extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            shopdetail:[],
            count:1
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
    handleSetNum(Symbol)
    {
        let {count}  = this.state
        if(Symbol==="+")
        {
            count = count <5 ? count+1 : count
        }
        else{
            count =  count >1 ? count-1 : count
        }
        this.setState({
            count
        })
    }
    handleSubimt(){
        let {count,shopdetail} = this.state
        this.props.onSetCount({
            type:"SET_STATE",
            key:"count",
            value:count
        })
        this.props.onfontname({
            type:"SET_STATE",
            key:"name",
            value:shopdetail.goods_name
        })
        this.props.onfontid({
            type:"SET_STATE",
            key:"id",
            value:shopdetail.goods_id
        })
        this.props.onfontstoreid({
            type:"SET_STATE",
            key:"storeid",
            value:shopdetail.store_id
        })
        // console.log(this.state.shopdetail)
        this.props.history.push("/write")
        

    }
    render() {
              
      let {shopdetail,count} = this.state
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
                      <span className="shopaddsub">
                          <b onClick={this.handleSetNum.bind(this,"+")}>＋</b> <strong>{count}</strong> <b onClick={this.handleSetNum.bind(this,"-")} >－</b>
                      </span>
                      <span className="shoptobuy" onClick={this.handleSubimt.bind(this)}>立即预定</span>
                  </p>
              </main>
              <footer></footer>
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
const mapDispatchToProps = (dispatch) => {
    return {
        onSetCount(action) {
            dispatch(action)
        },
        onfontname(action) {
            dispatch(action)
        },
        onfontid(action) {
            dispatch(action)
        },
        onfontstoreid(action) {
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))

