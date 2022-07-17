import { Menu } from "../../components/Menu";
import { Col, Row } from "antd";
import React from "react";
import { GoodCategory } from "../../components/GoodCategory/GoodCategory";
//import "./style.modules.css";

export const MainPage = () => {
  return (
    <div>
      <Row wrap={false}>
        <Col flex="none"><Menu /></Col>
          <Col flex="auto"><GoodCategory /></Col>
        
      </Row>
    </div>
    
  );
};
