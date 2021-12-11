import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { _id, title, blogBody, image, writerName } = blog;
    return (
        <div>
            <Card>
                <Card.Img
                    variant="top"
                    style={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover'
                    }}
                    src={`data:image/png;base64, ${image}`}
                />
                <Card.Body>
                    <Link className="text-decoration-none" to={`/blogs/${_id}`}>
                        {' '}
                        <Card.Title>{title.slice(0, 32)}..</Card.Title>
                    </Link>
                    <Card.Text>{blogBody.slice(0, 105)}.....''</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">
                        Written by{' '}
                        <span style={{ color: '#f79f1f' }}>{writerName}</span>
                    </small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Blog;
