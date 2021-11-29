import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
const AddBlog = () => {
    const { user } = useAuth();
    const [title, setTitle] = useState('');
    const [blog, setBlog] = useState('');
    const [image, setImage] = useState(null);

    const [error, setError] = useState('');

    const history = useHistory();
    const handleForm = (e) => {
        setError('');
        e.preventDefault();
        if (title.length < 10) {
            setError('Title must be more than 10 characters!! ');
            return;
        }
        if (blog.length < 250) {
            setError('Title must be more than 250 characters!! ');
            return;
        }

        const formData = new FormData();
        formData.append('blog_writer', user.displayName);
        formData.append('title', title);
        formData.append('blog', blog);
        formData.append('image', image);

        fetch('https://spooky-beast-33270.herokuapp.com/blog', {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.insertedId) {
                    alert('Successfully Blog posted!');
                    history.push('/home');
                }
            })
            .catch((error) => {
                setError(error);
            });
    };
    return (
        <Container className="mt-4">
            <h2>Write your story!</h2>
            <form onSubmit={handleForm} className="mt-3">
                <div className="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        className="form-label"
                    >
                        Blog Title
                    </label>
                    <input
                        onBlur={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                    />
                </div>
                <div className="mb-3">
                    <label for="formFile" className="form-label">
                        Cover Image
                    </label>
                    <input
                        className="form-control"
                        accept="image/*"
                        type="file"
                        id="formFile"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <div className="mb-3">
                    <label
                        for="exampleFormControlTextarea1"
                        className="form-label"
                    >
                        Blog Body
                    </label>
                    <textarea
                        onBlur={(e) => setBlog(e.target.value)}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="10"
                    ></textarea>
                </div>
                <div className="text-center">
                    <Button type="submit" variant="secondary">
                        Post
                    </Button>
                </div>
            </form>
            {error && <Alert variant="warning">{error}</Alert>}
        </Container>
    );
};

export default AddBlog;
