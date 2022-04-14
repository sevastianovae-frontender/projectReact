import React, { useContext } from "react";
import { Button, Row, Col, Image } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import { AppContext } from './../../context/appContext';
import { CurrentUserContext } from "./../../context/currentUserContext";

export const Menu = () => {

  const { favorites } = useContext(AppContext);
  const currentUser = useContext(CurrentUserContext);

  return (
    <Row>
      <Col offset={4}>
        <Image
          width={110}
          height={20}
          preview={false}
          src="https://seeklogo.com/images/R/remix-logo-74C1F4148A-seeklogo.com.png"
        />
      </Col>

      <Col offset={5} >
        <HeartTwoTone twoToneColor="red" style={{ fontSize: '20px', marginRight: '3px' }} />{favorites.length}
        <Button type="link" style={{ color: 'navy' }}> Home </Button>
        <Button type="link" style={{ color: 'blue' }}> Remix </Button>
      </Col>
  
      <Col style={{ marginRight: '10px' }}>
        {currentUser.email}
      </Col>     
      <Col style={{ color: '#6495ED' }}>
        {currentUser.name}
      </Col>
    </Row>
  );
};

