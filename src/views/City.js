import React, { Component } from 'react'
import "../assets/css/city/index.css"
import {connect} from "react-redux"
class City extends Component {
    componentDidMount()
    {
        
    }
    render() {
        let {token} = this.props;
        console.log(this.props,"11")
        return (
      
            <div className="box">
                <header className='header'></header>
                <main className="main">
                {token}
                </main>
                <footer className="footer"></footer>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        token: state.task.token
    }
}
export default  connect(mapStateToProps)(City)
