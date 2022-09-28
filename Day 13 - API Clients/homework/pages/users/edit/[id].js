import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function HomeIndex() {
    const router = useRouter();
    const query = router.query;
    const id = query.id;
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get('http://localhost:3001/users/' + id)
            .then(res => {
                console.log(res);
                setUser(res.data);
            })
            .catch(err => { console.log(err); });
    }, [id])
    // console.log(query.id);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/users/' + id, user)
            .then(response => {
                router.push('/users');
            })
            .catch(err => { console.log(err); });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" value={user.name || ''} onChange={handleChange}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}