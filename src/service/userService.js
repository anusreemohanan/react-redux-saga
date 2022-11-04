import axios from "axios";
import {BASE_URL} from '../config/config'
import { TOKEN } from "../config/config";
export const fetchUserList = async()=>{
    const response =await axios.get(BASE_URL+'/users'+TOKEN)
    return {data:response.data};

}
export const fetchPostsList =async()=>{
    const response = await axios.get(BASE_URL+'/posts'+TOKEN)
    return {data:response.data};
}
export const fetchCommentList = async ()=>{
    const response = await axios.get(BASE_URL+'/comments'+TOKEN)
    return {data:response.data};
}
export const addUserData = async(body)=>{
    const response =await axios.post(BASE_URL+'/users'+TOKEN,body)
    return {data:response.data};

}
export const deleteUserData = async(id)=>{
    const response =await axios.delete(BASE_URL+'/users'+'/'+id+TOKEN)
    return {data:response.data};

}