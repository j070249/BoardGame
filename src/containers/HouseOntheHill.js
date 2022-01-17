import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import { CaretLeftOutlined } from '@ant-design/icons';

function HouseOntheHill() {

  const [myRole, setMyRole] = useState(null);//new Employee('doge', 'doge', [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [3, 2, 2, 3])

  useEffect(() => {
    console.log("useEffect: " + myRole?.name);
  }, [myRole])

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        山中小屋
      </h1>

      {
        (myRole == null) ?
          <Col>
            <div style={{ color: "#FFFFFF", fontSize: 20, background: "#555555", padding: 10, margin: 20, borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              請選擇角色
            </div>
            <Row justify="center">
              <img src={require("../assets/images/doge.png")} width="40%" onClick={(e) => setMyRole(new Employee('doge', 'doge', [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [3, 2, 2, 3]))}/>
              <img src={require("../assets/images/doge.png")} width="40%" style={{ marginLeft: 20 }} onClick={(e) => setMyRole(new Employee('doge', 'doge', [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [3, 2, 2, 3]))}/>
            </Row>
            <Row justify="center" style={{ marginTop: 20 }}>
              <img src={require("../assets/images/doge.png")} width="40%" onClick={(e) => setMyRole(new Employee('doge', 'doge', [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [3, 2, 2, 3]))}/>
              <img src={require("../assets/images/doge.png")} width="40%" style={{ marginLeft: 20 }} onClick={(e) => setMyRole(new Employee('doge', 'doge', [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7], [3, 2, 2, 3]))}/>
            </Row>

          </Col> :
          <Col>
            <div style={{ color: "#000000", fontSize: 14,margin: 10, borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'  }} onClick={(e) => setMyRole(null)}>
              重新選擇角色
            </div>
            <Row span={6} justify="center">
              <img src={require(`../assets/images/${myRole.img}.png`)} width="40%" />
            </Row>
            <Row span={18} justify="space-around" style={{ marginTop: 20 }}>
              <Col>
                <div style={{ color: "#000000", fontSize: 16 }}>
                  力量
                </div>
                {
                  myRole.strength?.map((element, index) => {
                    return (
                      <Row align="middle">
                        <div>
                          {element}
                        </div>
                        {
                          (index == myRole.index[0]) ? <CaretLeftOutlined /> : <div></div>
                        }
                      </Row>
                    )
                  })
                }
              </Col>
              <Col>
                <div style={{ color: "#000000", fontSize: 16 }}>
                  速度
                </div>
                {
                  myRole.speed?.map((element, index) => {
                    return (
                      <Row align="middle">
                        <div>
                          {element}
                        </div>
                        {
                          (index == myRole.index[1]) ? <CaretLeftOutlined /> : <div></div>
                        }
                      </Row>
                    )
                  })
                }
              </Col>
              <Col>
                <div style={{ color: "#000000", fontSize: 16 }}>
                  精神
                </div>
                {
                  myRole.sanity?.map((element, index) => {
                    return (
                      <Row align="middle">
                        <div>
                          {element}
                        </div>
                        {
                          (index == myRole.index[2]) ? <CaretLeftOutlined /> : <div></div>
                        }
                      </Row>
                    )
                  })
                }
              </Col>
              <Col>
                <div style={{ color: "#000000", fontSize: 16 }}>
                  智慧
                </div>
                {
                  myRole.wisdom?.map((element, index) => {
                    return (
                      <Row align="middle">
                        <div>
                          {element}
                        </div>
                        {
                          (index == myRole.index[3]) ? <CaretLeftOutlined /> : <div></div>
                        }
                      </Row>
                    )
                  })
                }
              </Col>
            </Row>
          </Col>
      }
    </div>
  );
}

export default HouseOntheHill;

export class Employee {
  constructor(img, name, strength, speed, sanity, wisdom, index) {
    this.img = img;
    this.name = name;
    this.strength = strength;
    this.speed = speed;
    this.sanity = sanity;
    this.wisdom = wisdom;
    this.index = index;
  }
}