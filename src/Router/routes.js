import City from "@/views/City"
import Login from "@/views/Login"
import Register from "@/views/Register"
import My from "@/views/My"
import Shop from "@/views/Shop"
import Order from "@/views/Order"
import Write from "@/views/Write"
import Detail from "@/views/Detail"
let routes = [
    {
        path:"/city",
        component:City
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/shop",
        component:Shop
    },
    {
        path:"/my",
        component:My
    },
    {
        path:"/register",
        component:Register
    },
    {
        path:"/order",
        component:Order
    },
    {
        path:"/write",
        component:Write
    },
    {
        path:"/detail",
        component:Detail
    },
    {
        path:"/",
        redirect:"/register"
    }
]
export default 
{
    routes
}