import React from 'react'
import { Row, Col, Typography, Icon } from 'antd'
import { Link } from 'react-router-dom'
import ShopCarBadge from '../../ShopCarBadge'
const { Title } = Typography;
const Text = Typography.Text

const BusinessDetail = () => <div>
    <Text strong>Shop name</Text>
    <Text>Delivery in 10001</Text>
</div>

function TopMenuBusinessDetail () {    
    return (
        <Row>
            <Col align='start' span={6}><Link to='/'><Icon type="left"/></Link></Col>
            <Col align='center' span={12}><BusinessDetail /></Col>
            <Col align='end' span={6}><ShopCarBadge /></Col>
        </Row>
    );
}

export default TopMenuBusinessDetail