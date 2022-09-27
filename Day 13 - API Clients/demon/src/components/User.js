import axios from "axios";
import { useEffect, useState } from "react";

export const User = () => {
    const [userList, setUserList] = useState();
    useEffect(() => {
        axios
            .get("http://localhost:3001/api/users")
            .then(res => {
                setUserList(res.data);
            })
            .catch(err => {
                throw err;
            });
    }, []);
    return (
        <div>
            {
                userList.map(user => <p>{user.id}. {user.name}</p>)
            }
        </div>
    )
}