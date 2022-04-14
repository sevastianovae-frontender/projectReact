import React from "react";
import { Breadcrumb } from 'antd';


const _Breadcrumb = () => {
    return (
        <Breadcrumb style={{margin:'10px'}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">All posts</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
  };
  
  export default _Breadcrumb;
  