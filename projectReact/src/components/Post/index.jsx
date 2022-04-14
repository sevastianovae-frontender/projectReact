import React, { useContext } from "react";
import { Button, Card, Avatar, Row, Col, Tag, Timeline, Image } from 'antd';
import { UserOutlined, HeartTwoTone } from '@ant-design/icons';
import cn from 'classnames';
import { AppContext } from "./../../context/appContext";
import { Link } from "react-router-dom";

export const Post = ({ item, onProductLike, currentUser, productDelete }) => {
    const _id = item._id; const likes = item.likes;
    const isLiked = item.likes.some(id => id == currentUser._id);
    const { handleProductLike, isLoading } = useContext(AppContext);

    function handleLikeClick() {
        onProductLike({ _id, likes })
    }

    function deleteClick() {
        let tr = confirm("Точно?");
        if (tr) { productDelete({ _id }) }
    }
    return (
        <Card title={item.title} >
            <Link to={`/posts/${_id}`} className="card__link">
                <Row style={{ marginBottom: "10px" }}>
                    <Col><Avatar size={38} icon={<UserOutlined />} /></Col>
                    <Col offset={1}><p style={{ marginTop: "8px" }}>{item.author.email}</p></Col>
                </Row>
                <Row style={{ color: 'black' }}><p>{item.text}</p></Row>
                <Row><p>Tags: </p> <Tag color="processing" style={{ height: "24px", marginLeft: "5px" }}>{item.tags}</Tag></Row>
                <Row><Timeline>
                    <Timeline.Item>{item.created_at}</Timeline.Item>
                    <Timeline.Item color="green">{item.updated_at}</Timeline.Item>
                </Timeline>
                </Row>
            
            <Image  width={300} height={200} preview={false} src={item.image}/>
        </Link>
            <Row style={{ marginTop: '30px' }}>
                <Button style={{ borderColor: 'CornflowerBlue' }} onClick={handleLikeClick}>
                    <HeartTwoTone style={{ fontSize: '20px', marginRight: '3px' }} twoToneColor={cn({ "grey": !isLiked }, { "red": isLiked })} />
                    {item.likes.length}
                </Button>
           
                </Row>
                
            <Button style={{ borderColor: 'CornflowerBlue' }} onClick={deleteClick}>Удалить пост</Button>
            <Link to={`/changepost/${_id}`}> <Button style={{ borderColor: 'CornflowerBlue' }} >Редактировать пост</Button>
            </Link>
        </Card>
    );
}

