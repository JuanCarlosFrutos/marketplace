import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import PlaceFinder from './PlaceFinder'
import CurrentAddress from './CurrentAddress';
import ShopCarBadge from '../ShopCarBadge'

const Header = Layout.Header;

function HeaderMenu () {
    const [searchInputVisible, setSearchInputVisibility] = useState(false)
    return (
        <Header style={{ borderBottom: '1px solid #808080', paddingLeft: '16px', paddingRight: '16px' }}>
            <Row>
                <Col align='start' span={!searchInputVisible ? 6 : 24}>
                    <PlaceFinder setSearchInputVisibility={setSearchInputVisibility} searchInputVisible={searchInputVisible} />
                </Col>
                <Col align='center' style={{ display: searchInputVisible ? 'none' : 'inherit'}} span={12}><CurrentAddress /></Col>
                <Col align='end' style={{ display: searchInputVisible ? 'none' : 'inherit'}} span={6}><ShopCarBadge /></Col>
            </Row>
        </Header>
    );
}

export default HeaderMenu;