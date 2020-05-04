import React from 'react';
import { Layout, Row, Col, Typography , Button, Icon} from 'antd';
import { Link } from 'react-router-dom'

const Header = Layout.Header;
const Text = Typography.Text

const BusinessDetail = () => <div>
    <Text>Shop name</Text>
    <Text>Delivery in 10001</Text>
</div>

const Badge = () => <Button style={{ fontSize: '18px', color: '#fff', background: '#bfbfbf'}} shape='round' icon='shopping-cart'>
    <Text style={{fontSize: '14px', color: '#fff'}}>0</Text>
</Button>

function TopMenuBusinessDetail () {    return (
        <Header style={{ borderBottom: '1px solid #808080', paddingLeft: '16px', paddingRight: '16px' }}>
            <Row>
                <Col align='start' span={6}><Link to='/'><Icon type="left"/></Link></Col>
                <Col align='center' span={12}><BusinessDetail /></Col>
                <Col align='end' span={6}><Badge /></Col>
            </Row>
        </Header>
    );
}

export default TopMenuBusinessDetail;