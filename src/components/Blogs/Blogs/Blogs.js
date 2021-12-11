import React, { useEffect, useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://spooky-beast-33270.herokuapp.com/blogs')
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);
    return (
        <Container className="mt-5">
            {user.email && (
                <Link
                    className="text-uppercase  text-decoration-none "
                    to="/addblog"
                >
                    <Button variant="warning fs-5 fw-bold">
                        Write a story
                    </Button>
                </Link>
            )}

            <div className="mt-5">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {blogs.map((blog) => (
                        <Blog key={blog._id} blog={blog}></Blog>
                    ))}
                    {/* {Array.from({ length: 4 }).map((_, idx) => (
                        // <Col>
                        //     <Card>
                        //         <Card.Img
                        //             variant="top"
                        //             src="holder.js/100px160"
                        //         />
                        //         <Card.Body>
                        //             <Card.Title>Card title</Card.Title>
                        //             <Card.Text>
                        //                 This is a longer card with supporting
                        //                 text below as a natural lead-in to
                        //                 additional content. This content is a
                        //                 little bit longer.
                        //             </Card.Text>
                        //         </Card.Body>
                        //     </Card>
                        // </Col>
                    ))} */}
                </Row>
            </div>
        </Container>
    );
};

export default Blogs;
