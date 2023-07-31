import React from 'react';
import { Card, Typography, Button } from 'antd';
import '../common/style-briefcase.css';

const { Meta } = Card;

const Work = ({ image, title, description, buttonText, link }) => {
    return (
        <Card
            cover={<img alt="Card" src={image} className="card-image" />}
            className="custom-card"
        >
            <Meta title={title} description={description} className='card-description'/>
            <Button href={link} type="primary">
                {buttonText}
            </Button>
        </Card>
    );
};

export default Work;
