import React, { useEffect, useState } from 'react';
import { Card, Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import {
    EmailShareButton,
    FacebookIcon,
    FacebookMessengerIcon,
    FacebookMessengerShareButton,
    FacebookShareButton,
    HatenaShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from 'react-share';
const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        fetch(`https://spooky-beast-33270.herokuapp.com/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => setBlog(data));
    }, []);

    if (!blog.title) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" />
            </div>
        );
    }
    return (
        <Container className="mt-5">
            <h2 className="my-3 fw-bold">{blog.title}</h2>
            <h5 className="mb-4">Written by {blog.writerName}</h5>
            <Card>
                <Card.Img
                    variant="top"
                    src={`data:image/png;base64, ${blog.image}`}
                />
                <Card.Body>
                    <Card.Text>{blog.blogBody}</Card.Text>
                </Card.Body>
            </Card>
            <div className="mt-3">
                <h6>Share on:</h6>
                <FacebookShareButton
                    className="me-3"
                    url={`https://spooky-beast-33270.herokuapp.com/blogs/${blog._id}`}
                    quote={blog.title}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                    className="me-3"
                    url={`https://spooky-beast-33270.herokuapp.com/blogs/${blog._id}`}
                    title={blog.title}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton
                    className="me-3"
                    url={`https://spooky-beast-33270.herokuapp.com/blogs/${blog._id}`}
                    title={blog.title}
                    separator=":: "
                >
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <LinkedinShareButton
                    className="me-3"
                    url={`http://localhost:3000/blogs/${blog._id}`}
                >
                    <LinkedinIcon size={32} round />
                </LinkedinShareButton>
            </div>
        </Container>
    );
};

export default BlogDetails;
