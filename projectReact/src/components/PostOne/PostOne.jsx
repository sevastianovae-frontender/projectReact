import React, { useState, useContext } from "react";
import { CurrentUserContext } from '../../context/currentUserContext';
import { AppContext } from '../../context/appContext';
import { ContentHeader } from './../ContentHeader/index';
import { UserOutlined } from '@ant-design/icons';
import { Divider, Avatar, Row, Col, Tag, Image } from 'antd';


export const PostOne = ({ _id, text, updated_at, author, title, created_at, tags, image }) => {
    const [count, setCount] = useState(0)
    const { handleProductLike } = useContext(AppContext);
    const currentUser = useContext(CurrentUserContext);
    const isLike = true
    function createMarkup() {
        return { __html: description };
    }

    //console.log("dddd", author)
    function handleLikeClick() {
        handleProductLike(_id, isLike)
    }

    return (
        <>
            <Col offset={4} span={9} style={{ marginBottom: "30px"}}>
                <ContentHeader title={title}></ContentHeader>
                <Row>
                    <Avatar size={38} icon={<UserOutlined/>} />
                    <Col style={{ marginTop: "8px", marginLeft: "10px" }}>{{ ...author }.email}</Col>
                </Row>
                <Divider/>
                <Row>Created at {created_at}</Row>
                <Row>Edited at {updated_at}</Row>
                <Divider/>
                <Row> {text}</Row>
                <Divider/>
                <Image  width={300} height={200} preview={false} src={image}/>
                <Row><Tag color="processing" style={{ height: "24px", marginLeft: "5px" }}>{tags}</Tag></Row>
            </Col>

        </>
    );
};
