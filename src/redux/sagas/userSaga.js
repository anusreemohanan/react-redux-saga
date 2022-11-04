import { all, call, put, takeLatest } from 'redux-saga/effects'

import {fetchUserList,fetchPostsList,fetchCommentList,addUserData,deleteUserData} from '../../service/userService'
import {userActionType,
  fetchUserListSuccess,
  fetchUserListError, fetchPostListError, 
  fetchPostListSuccess, fetchCommentListSuccess, fetchCommentListError, addNewUser, addNewUserSucces,
   addNewUserError,
   deleteUserSuccess,
   deleteUserError} from '../actions/userAction'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* _fetchUser(action) {
   try {
      const user = yield call(fetchUserList);
      yield put(fetchUserListSuccess(user));
   } catch (e) {
      yield put(fetchUserListError("error"));
   }
}//suppoter

function* fetchUser() {
  yield takeLatest(userActionType.FETCH_USER_LIST, _fetchUser);
}//watcher
function* _fetchPost(){
  try {
    const post = yield call(fetchPostsList);
    yield put(fetchPostListSuccess(post));
  }catch (e) {
    yield put(fetchPostListError("error"));
  }
}
function* fetchPost(){
  yield takeLatest(userActionType.FETCH_POST_LIST,_fetchPost);
}
function* _fetchComment(){
  try{
    const comment= yield call(fetchCommentList);
    yield put(fetchCommentListSuccess(comment));
  }catch (e) {
    yield put(fetchCommentListError("error"))
  }
}
function* fetchComment(){
  yield takeLatest(userActionType.FETCH_COMMENT_LIST,_fetchComment);
}
function* _addUser(action) {
  console.log("actionaction",action)
  try {
     const user = yield addUserData(action.data);
     yield put(addNewUserSucces(user));
  } catch (e) {
     yield put(addNewUserError(e.message));
  }
}
function* addUser(){
  yield takeLatest(userActionType.ADD_NEW_USER,_addUser)
}
function* _deleteUser(action) {
  console.log("actionactiondelete",action)
  try {
     const user = yield deleteUserData(action.data);
     yield put(deleteUserSuccess(user));
  } catch (e) {
     yield put(deleteUserError(e.message));
  }
}
function* deleteUser(){
  yield takeLatest(userActionType.DELETE_USER,_deleteUser)
}
export default function* userSaga(){
    yield all([fetchUser(),fetchPost(),fetchComment(),addUser(),deleteUser()])
}