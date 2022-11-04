import { userActionType } from "../actions/userAction";
const dataTemplate = {
    isFetching: false,
    payload: [],
    error: false,
    errorMessage: ""
}
const initialData = {
    userList: dataTemplate,
    postList: dataTemplate,
    commentList: dataTemplate,
    addUser:dataTemplate,
    deleteUser:dataTemplate,
}
const UserReducer = (state = initialData, action) => {
    switch (action.type) {
        case userActionType.FETCH_USER_LIST:
            return {
                ...state,
                userList: {
                    ...state.userList,
                    isFetching: true
                }
            }
        case userActionType.FETCH_USER_LIST_SUCCESS:
            return {
                ...state,
                userList: {
                    ...state.userList,
                    isFetching: false,
                    error: false,
                    payload: action.payload
                }
            }
        case userActionType.FETCH_USER_LIST_ERROR:
            return {
                ...state,
                userList: {
                    ...state.userList,
                    isFetching: false,
                    error: true,
                    payload: [],
                    errorMessage: action.errorMessage
                }
            }
            
        case userActionType.FETCH_POST_LIST:
            return {
                ...state,
                postList:{
                    ...state.postList,
                    isFetching:true
                }
            }
        case userActionType.FETCH_POST_LIST_SUCCESS:
            return {
                ...state,
                postList:{
                    ...state.postList,
                    isFetching:false,
                    payload:action.payload,
                    error:false
                }
            }
        case userActionType.FETCH_POST_LIST_ERROR:
            return {
                ...state,
                postList:{
                    ...state.postList,
                    isFetching:false,
                    payload:[],
                    error:true,
                    errorMessage:action.errorMessage
                }
            }
        case userActionType.FETCH_COMMENT_LIST:
            return {
                ...state,
                commentList:{
                    ...state.commentList,
                    isFetching:true
                }
            }
        case userActionType.FETCH_COMMENT_LIST_SUCCESS:
            return {
                ...state,
                commentList:{
                    ...state.commentList,
                    isFetching:false,
                    payload:action.payload,
                    error:false
                }
            }
        case userActionType.FETCH_COMMENT_LISTT_ERROR:
            return {
                ...state,
                commentList:{
                    ...state.commentList,
                    isFetching:false,
                    payload:[],
                    error:true,
                    errorMessage:action.errorMessage
                }
            }
            case userActionType.ADD_NEW_USER:
            return {
                ...state,
                addUser:{
                    ...state.addUser,
                    isFetching:true,
                    payload:action.payload
                }
            }
        case userActionType.ADD_NEW_USER_SUCCESS:
            return {
                ...state,
                addUser:{
                    ...state.addUser,
                    isFetching:false,
                    payload:action.payload,
                    error:false
                }
            }
        case userActionType.ADD_NEW_USER_ERROR:
            return {
                ...state,
                addUser:{
                    ...state.addUser,
                    isFetching:false,
                    payload:[],
                    error:true,
                    errorMessage:action.errorMessage
                }
            }
            case userActionType.DELETE_USER:
            return {
                ...state,
                deleteUser:{
                    ...state.deleteUser,
                    isFetching:true,
                    payload:[],
                }
            }
        case userActionType.DELETE_USER_SUCCESS:
            return {
                ...state,
                deleteUser:{
                    ...state.deleteUser,
                    isFetching:false,
                    payload:action.payload,
                    error:false
                }
            }
        case userActionType.DELETE_USER_ERROR:
            return {
                ...state,
                deleteUser:{
                    ...state.deleteUser,
                    isFetching:false,
                    payload:[],
                    error:true,
                    errorMessage:action.errorMessage
                }
            }
        default:
            return state
    }
    
}
export default UserReducer;