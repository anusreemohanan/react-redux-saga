import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostList } from '../redux/actions/userAction';

export const UserPosts = () =>{
    const dispatch = useDispatch();
    const postDetails = useSelector(state => state.post.postList)
    useEffect(()=>{
        getUserPosts()
    },[])
    const getUserPosts = () =>{
        dispatch(fetchPostList());
    }
    return(
        <div>
            {postDetails.isFetching ? <>Loading...</> :
        <>
            {postDetails.error ? <>{postDetails.errorMessage}</> :
           <table border="1">
                            <tbody>
                                <tr>
                                    <th> ID</th>
                                    <th>User ID</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                   
                                </tr>
                           
                            {postDetails.payload.data?.map((post, index) => (
                            <tr key={index}>
                                <td>{post.id}</td>
                                <td>{post.user_id}</td>
                                <td>{post.title} </td>
                                <td>{post.body} </td>
                            </tr>
))} </tbody>
                            </table>}
                            </>
}
        </div>
    )
}