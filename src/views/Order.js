import React, { Component } from 'react'
import Footer from "../component/footer"
import Header from "../component/header"
import {withRouter} from "react-router-dom"
import {connect}  from "react-redux"
import {getlist} from "../api/order"
 class Order extends Component {
    componentDidMount()
    {
        let {token} = this.props
        getlist({token:token}).then(res=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div className="box">
             <Header></Header>
               <main className="main">

               </main>
              <Footer></Footer>
            </div>
        )
    }
}
 const mapStateToProps = (state) =>
{
    return {
        token:state.task.token
    }
}
export default connect(mapStateToProps)(withRouter(Order))
