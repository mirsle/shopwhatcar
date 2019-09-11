import React, { Component } from 'react'
import "../assets/css/city/index.css"
import {connect} from "react-redux"
import {storelist} from "../api/commodity"
import Footer from "../component/footer"
import Header from "../component/header"
import {withRouter} from "react-router-dom"
class City extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            Country:[]
        }
    }
    componentDidMount()
    {
        storelist().then(res=>{
            console.log(res)
            this.setState({
               Country:res.data.result
            })
        })
    }
    handleToDetail(id,name)
    {
      this.props.history.push(`/shop/${id}/${name}`)
    }
    render() {
        let {Country}  = this.state
        return (
      
            <div className="box">
              <Header></Header>
                <main className="main">
                    <div className="setch"></div>
                   {Country&&Country.map((item,index)=>{
                       return <div className="item" key={index} onClick={this.handleToDetail.bind(this,item.store_id,item.store_name)}>
                        <span>{item.store_name}</span>
                       </div>
                   })}
                </main>
               <Footer></Footer>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.task.token
    }
}
export default  connect(mapStateToProps)(withRouter(City))
