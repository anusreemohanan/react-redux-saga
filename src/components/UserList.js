import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, fetchUserList, fetchUserListError, fetchUserListSuccess } from '../redux/actions/userAction';
export const UserList = () => {
    const dispatch = useDispatch();
    const userDetails = useSelector(state => state.user.userList)
    const addUserData = useSelector(state => state.user.addUser)
    useEffect(() => {
        getUserList();
    }, []); // if [] run during mount
    useEffect(()=>{  //life cycle methods overcome - componentDidMount()
        if(!addUserData.isFetching && !addUserData.error){                
                getUserList();
        }else if(!addUserData.isFetching&&addUserData.error){
                alert(addUserData.errorMessage);
        }
    },[addUserData.isFetching]) //if [SOME_VALUE] run during value update componentDidUpdate()
    const getUserList = () => {
        dispatch(fetchUserList());
        // axios.get('https://gorest.co.in/public/v2/users?access-token=42e75fc9904a15725dfa620e87f1bb166f48e3e49357b9dc97da68daeeba14a1')
        // .then(response=>{
        //     console.log(response.data);
        //     dispatch(fetchUserListSuccess(response.data));
        // }).catch(error=>{
        //     console.log(error)
        //     dispatch(fetchUserListError("Error while process"))
        // })
        // fetch(
        //     'https://gorest.co.in/public/v2/users?access-token=42e75fc9904a15725dfa620e87f1bb166f48e3e49357b9dc97da68daeeba14a1'
        // )
        //     .then((response) => response.json())
        //     .then((response) => {
        //         dispatch(fetchUserListSuccess(response));
        //         //  console.log(userData);
        //     }).catch((error) => {
        //         dispatch(fetchUserListError("Error while process"))
        //     });
    };
    const handleClick =(id)=>{
        dispatch(deleteUser(id))
    }

    return (
        <div>
            {JSON.stringify(addUserData)}
            {userDetails.isFetching ? <>Loading...</> :
                <>
                    {userDetails.error ? <>{userDetails.errorMessage}</> :

                        <table border="1">
                            <tbody>
                                <tr>
                                    <th> ID</th>
                                    <th>Name</th>
                                    <th>Emailsss</th>
                                    <th>Gender</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                {userDetails.payload.data?.map((user, index) => (
                                    <tr key={index}>
                                        <td> {user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.status}</td>
                                        <td>
                                            <button type="button" onClick={()=>handleClick(user.id)}>delete</button>
                                        </td>
                                    </tr>
                                ))}
                                
                            </tbody>
                        </table>}
                </>
            }
        </div>
    );
};
