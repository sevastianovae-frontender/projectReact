import React, { useState, useEffect } from "react";
import { Col, Layout, Row } from 'antd';
import { PostList } from './components/PostList';
import Divider from './components/Footer/index';
import { Menu } from './components/Header';
import api from "./utils/Api";
import { AppContext } from './context/appContext';
import { CurrentUserContext } from "./context/currentUserContext";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { PagePost } from "./pages/PostPage/PostPage";
import { NewPostPage } from "./pages/NewPostPage/NewPostPage";
import { ChangePostPage } from "./pages/ChangePostPage/ChangePostPage";
const { Header, Footer, Content } = Layout;

export const AppAnt = () => {
  const [favorites, setFavorites] = useState([]);
  const [currentUser, setCurrentUser] = useState({});



  useEffect(() => {
    Promise.all([api.getUserInfo()])
      .then(([userData]) => {
        setCurrentUser(userData)

      });
  }, [])


  function updateLike(value) { setFavorites(value.favorites); }


  return (

    <Layout>

      <AppContext.Provider value={{ favorites }}>
        <CurrentUserContext.Provider value={currentUser}>
          <Header style={{
            backgroundColor: 'white',
          }}>
            <Menu />
          </Header>
          <Content>

            <Routes>

              <Route path="/" element={<PostList updateLike={updateLike} />} />
              <Route path="/posts/:postID" element={<PagePost />} />
              <Route path="/newpost" element={<NewPostPage />} />
              <Route path="/changepost/:postID" element={<ChangePostPage />} />
              <Route path="*" element={<NotFoundPage />} />

            </Routes>

          </Content>

          <Footer style={{ backgroundColor: 'white' }}>
            <Row>
              <Col span={16} offset={4}>
                <Divider />
              </Col>
            </Row>
          </Footer>
        </CurrentUserContext.Provider>
      </AppContext.Provider>
    </Layout>

  );

};
