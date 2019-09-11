import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import rou from "./routes"
 class Router extends Component {
     
    render() {
        let conponents = rou.routes.filter(item=>item.component)
        let redirects = rou.routes.filter(item=>item.redirect)
        console.log(redirects)
        return (
            <>
            <Switch>
                    {
                       conponents.map((item,index)=>{
                        return <Route path={item.path} render={()=>{return <item.component children={item.children}></item.component>}} key={index}></Route>
                       }).concat(redirects.map((item,index)=>{
                           return <Redirect from={item.path} to={item.redirect}  key={index}></Redirect>
                       })) 
                    }
                </Switch>
            </>
        )
    }
}
export default Router