export const userActionType = {
    // User Actions
    FETCH_USER_LIST: 'FETCH_USER_LIST',
    FETCH_USER_LIST_SUCCESS: 'FETCH_USER_LIST_SUCCESS',
    FETCH_USER_LIST_ERROR: 'FETCH_USER_LIST_ERROR',
    FETCH_USER_LIST_RESET: 'FETCH_USER_LIST_RESET',
    // Post Actions
    FETCH_POST_LIST: 'FETCH_POST_LIST',
    FETCH_POST_LIST_SUCCESS: 'FETCH_POST_LIST_SUCCESS',
    FETCH_POST_LIST_ERROR: 'FETCH_POST_LIST_ERROR',
    FETCH_POST_LIST_RESET: 'FETCH_POST_LIST_RESET',

    FETCH_COMMENT_LIST:'FETCH_COMMENT_LIST',
    FETCH_COMMENT_LIST_SUCCESS:'FETCH_COMMENT_LIST_SUCCESS',
    FETCH_COMMENT_LISTT_ERROR:'FETCH_COMMENT_LISTT_ERROR',
    //Add user
    ADD_NEW_USER:'ADD_NEW_USER',
    ADD_NEW_USER_SUCCESS:'ADD_NEW_USER_SUCCESS',
    ADD_NEW_USER_ERROR:'ADD_NEW_USER_ERROR',
    ADD_NEW_USERT_RESET:'ADD_NEW_USERT_RESET',
    //delete user
    DELETE_USER:'DELETE_USER',
    DELETE_USER_SUCCESS:'DELETE_USER_SUCCESS',
    DELETE_USER_ERROR:'DELETE_USER_ERROR'
}
export const fetchUserList=()=>{
    return {
        type:userActionType.FETCH_USER_LIST
    }
}
export const fetchUserListSuccess=(data)=>{
    return {
        type:userActionType.FETCH_USER_LIST_SUCCESS,
        payload:data
    }
}
export const fetchUserListError=(errorMessage)=>{
    return {
        type:userActionType.FETCH_USER_LIST_ERROR,
        errorMessage
    }
}
export const fetchPostList = () =>{
    return{
        type : userActionType.FETCH_POST_LIST
    }
}
export const fetchPostListSuccess = (data) =>{
    return {
        type :userActionType.FETCH_POST_LIST_SUCCESS,
        payload:data
    }
}
export const fetchPostListError = (errorMessage) =>{
    return {
        type:userActionType.FETCH_POST_LIST_ERROR,
        errorMessage
    }
}
export const fetchCommentList = ()=>{
    return{
        type:userActionType.FETCH_COMMENT_LIST
    }
}
export const fetchCommentListSuccess =(data)=>{
    return {
        type:userActionType.FETCH_COMMENT_LIST_SUCCESS,
        payload:data,
    }
}
export const fetchCommentListError =(errorMessage)=>{
    return {
        type:userActionType.FETCH_COMMENT_LISTT_ERROR,
        errorMessage
    }
}
export const addNewUser = (data)=>{
    return {
        type:userActionType.ADD_NEW_USER,
        data:data
    }
}
export const addNewUserSucces = (data)=>{    
    return {
        type:userActionType.ADD_NEW_USER_SUCCESS,
        payload:data
    }
}
export const addNewUserError = (errorMessage)=>{
    return {
        type:userActionType.ADD_NEW_USER_ERROR,
        errorMessage
    }
}
export const addNewUserReset = ()=>{
    return {
        type:userActionType.ADD_NEW_USER
    }
}
export const deleteUser = (data)=>{
    return {
        type:userActionType.DELETE_USER,
        data:data
    }
}
export const deleteUserSuccess = (data)=>{    
    return {
        type:userActionType.DELETE_USER_SUCCESS,
        payload:data
    }
}
export const deleteUserError = (errorMessage)=>{
    return {
        type:userActionType.DELETE_USER_ERROR,
        errorMessage
    }
}