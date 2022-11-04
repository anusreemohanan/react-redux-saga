import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentList } from '../redux/actions/userAction';

export const UserComments = () =>{
    useEffect(()=>{
        getUserComments()
    },[])
    const dispatch =useDispatch();
    const commentDetails=useSelector(state=>state.comments.commentList)
    const getUserComments = () =>{

        dispatch(fetchCommentList());
    }

    return(
        <div>
           { commentDetails.isfetching ? <>Loading</> :
           <>
            {   commentDetails.error ? <>{commentDetails.errorMessage}</>:
                <table border="1">
               
            <tbody>
                    <tr>
                        <th>ID</th>
                        <th>POST_ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>COMMENT</th>
                    </tr>
               
                {commentDetails.payload.data ?.map((comment,index)=>(
                    <tr key={index}>
                        <td> {comment.id}</td>
                        <td>{comment.post_id}</td>
                        <td>{comment.name}</td>
                        <td>{comment.email}</td>
                        <td>{comment.body}</td>
                    </tr>
               )) }
                </tbody>
            </table>
            }
            </>
}
        </div>
    )
}