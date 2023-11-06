import { IregisterUSer } from "../interfaces";
import { Api } from "../provider";


const sendUser =(data:IregisterUSer) => Api.post('/user',data) 

export const registerServices ={
    sendUser
}