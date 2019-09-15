import request from "../utils/request"
export function create(data)
{
     return request.post("/buyer/order/create",data)
}
export function getlist(data)
{
     return request.post("/buyer/order/order",data)
}