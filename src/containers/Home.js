import React, { useState } from 'react';
import GameEntry from '../components/GameEntry';
import { Col } from 'antd';
import { Link} from "react-router-dom";
import logo from '../assets/images/doge.png';


function Home() {
  return (
    <Col>
        <h1 style={{textAlign:'center'}}>
        選擇遊戲
        </h1>
        <Link to="/BoardGame/HouseOntheHill">
          <GameEntry src ={logo} title ={"山中小屋"} des ={""} background ={"#76bf00"}/>
        </Link>
    </Col>
  );
}

export default Home;
