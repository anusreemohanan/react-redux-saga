export const postActionType = {
// Post Actions
FETCH_POST_LIST: 'FETCH_POST_LIST',
FETCH_POST_LIST_SUCCESS: 'FETCH_POST_LIST_SUCCESS',
FETCH_POST_LIST_ERROR: 'FETCH_POST_LIST_ERROR',
FETCH_POST_LIST_RESET: 'FETCH_POST_LIST_RESET'
}
export const fetchPostList = () =>{
    return{
        type : postActionType.FETCH_POST_LIST
    }
}
export const fetchPostListSuccess = () =>{
    return {
        type :postActionType.FETCH_POST_LIST_SUCCESS
    }
}
export const fetchPostListError = () =>{
    return {
        type:postActionType.FETCH_POST_LIST_ERROR
    }
}