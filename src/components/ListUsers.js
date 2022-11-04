import { useSelector } from "react-redux"

const ListUsers = () => {
    const users = useSelector(state => state.user.userList)
    return (
        <div>
            {users.isFetching ? <>Loading...</> :
                <>
                    {users.error ? <>{users.errorMessage}</> :

                        <table border="1">
                            <tbody>
                                <tr>
                                    <th> ID</th>
                                    <th>Name</th>
                                    <th>Emailsss</th>
                                    <th>Gender</th>
                                    <th>Status</th>
                                </tr>
                                {users.payload?.map((user, index) => (
                                    <tr key={index}>
                                        <td> {user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>}
                </>
            }
        </div>
    );
}

export default ListUsers;