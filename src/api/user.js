import request from "../utils/request"

export function login(data)
{
    return request.post("/buyer/user/login",data)
}


export function register(data)
{
   return  request.post("/buyer/user/register",data)
}


export function captcha()
{
   return request.get("/buyer/user/captcha")
}