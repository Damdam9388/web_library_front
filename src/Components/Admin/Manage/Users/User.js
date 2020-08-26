import React from 'react';
import DeleteUser from "./DeleteUser";
import UpdateUser from "./UpdateUser";

const User = ({user}) => {
    return (
        <>
        {console.log(user)}
        <tr>
            <th scope="row">{user.id}</th>
            <td>{user.login}</td>
            <td>{user.email}</td>
            <td><UpdateUser user={user} /> </td>
            <td> <DeleteUser user={user} /> </td>
        </tr>
            </>
    );
};
export default User;