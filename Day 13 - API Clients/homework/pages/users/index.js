import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Link from "next/link";

export default function UserIndex() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => { console.log(err); });
    }, []);

    return (
        <div>
            <Layout>
                <h2>User List</h2>
                <Link href='/users/create'>
                    <button className="btn btn-success">Create new user</button>
                </Link>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>
                                        <Link href={{
                                            pathname: 'users/edit/' + user.id
                                        }}>
                                            <button className="btn btn-secondary mx-2">Edit</button>
                                        </Link>
                                        <button className="btn btn-warning mx-2">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Layout>
        </div>
    )
}