import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Blog from '../../Blogs/Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://spooky-beast-33270.herokuapp.com/blogs')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <Container className="mt-5">
            <h1 class="heading">
                <span>B</span>
                <span>l</span>
                <span>o</span>
                <span>g</span>
                <span>s</span>
            </h1>

            <div className="mt-5">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {blogs.slice(0, 3).map((blog) => (
                        <Blog key={blog._id} blog={blog}></Blog>
                    ))}
                </Row>
            </div>
            <div className="text-end mt-3">
                <Link to="/blogs">See More>></Link>
            </div>
        </Container>
    );
};

export default Blogs;
