import { Col, Row } from 'antd';

const GameEntry = (props) => {

    return (
        <div style={{background:props.background, margin:20, padding: 20, borderRadius:20}}>
            <Row justify="center">
                <Col span={6}>
                    <img src={props.src} width="80%"/>
                </Col>
                <Col span={18} align="middle">
                    <h2 style={{fontSize:20, color:"#FFFFFF"}}>
                        {props.title}
                    </h2>
                </Col>
            </Row>
        </div>
    )
}

export default GameEntry;