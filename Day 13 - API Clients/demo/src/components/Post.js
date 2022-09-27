import { useEffect, useState } from "react";
import axios from "axios";

export const Post = () => {
    const [posts, setPosts] = useState([]);
    const [mode, setMode] = useState({ status: 'add', action: 'Submit' });
    const [form, setForm] = useState({ title: '', author: '' });

    useEffect(() => {
        axios.get("http://localhost:3001/posts")
            .then(res => setPosts(res.data))
            .catch(err => alert(err.message));
    }, []);

    const deletePost = (index) => {
        axios.delete('http://localhost:3001/posts/' + index)
            .then(res => {
                if (res.status === 200) {
                    setPosts(posts.filter(post => post.id !== index))
                }
            });
    }

    const editPost = (index) => {
        setMode({ status: 'edit', action: 'Edit', selectedIndex: index });
        axios.get("http://localhost:3001/posts/" + index)
            .then(res => setForm(res.data))
            .catch(err => alert(err.message))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode.status === 'add') {
            axios.post('http://localhost:3001/posts', {
                title: form.title,
                author: form.author
            })
                .then(function (response) {
                    console.log(response);
                    setPosts([...posts, response.data]);
                    setForm({ title: '', author: '' });
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            axios.put('http://localhost:3001/posts/' + mode.selectedIndex, form)
                .then(response => {
                    console.log(response);
                    let newPosts = posts.map((post, index) => {
                        if (post.id == response.data.id) {
                            post = response.data
                        }
                        return post;
                    });
                    setPosts(newPosts);
                    setForm({ title: '', author: '' });
                    setMode({ status: 'add', action: 'Submit' })
                })
                .catch(err => console.log(err));
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col-12 col-lg-3"></div>
                <div className="col-12 col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Post title</label>
                            <input name="title" type="text" className="form-control" id="title" value={form.title} onChange={handleChange} aria-describedby="titleHelp"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Post author</label>
                            <input name="author" type="text" className="form-control" id="author" value={form.author} onChange={handleChange} aria-describedby="authorHelp"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">{mode.action}</button>
                    </form>
                </div>
                <div className="col-12 col-lg-3"></div>
            </div>
            <div className="post-index">
                <table className="table table-hover table-striped">
                    <thead>
                        <tr className="text-center">
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post, index) => (
                                <tr key={index}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.author}</td>
                                    <td>
                                        <button className="btn btn-primary mx-2" onClick={() => editPost(post.id)}>Edit</button>
                                        <button className="btn btn-danger mx-2" onClick={() => deletePost(post.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}