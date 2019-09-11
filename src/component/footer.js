import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
export default class footer extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
                 <footer className="footer">
                    <p><NavLink to="/city">城市</NavLink></p>
                    <p><NavLink to="/order">订单</NavLink></p>
                    <p><NavLink to="/my">我的</NavLink></p>
                </footer>
        )
    }
}
