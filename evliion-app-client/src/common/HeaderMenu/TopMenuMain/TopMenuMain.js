import React, {useState} from 'react'
import { Row, Col } from 'antd'
import ShopCarBadge from '../../ShopCarBadge'
import CurrentAddress from '../CurrentAddress'
import PlaceFinder from '../PlaceFinder'

function TopMenuMain () {
    const [searchInputVisible, setSearchInputVisibility] = useState(false)
    return (
        <Row>
            <Col align='start' span={!searchInputVisible ? 6 : 24}>
                <PlaceFinder setSearchInputVisibility={setSearchInputVisibility} searchInputVisible={searchInputVisible} />
            </Col>
            <Col align='center' style={{ display: searchInputVisible ? 'none' : 'inherit'}} span={12}><CurrentAddress /></Col>
            <Col align='end' style={{ display: searchInputVisible ? 'none' : 'inherit'}} span={6}><ShopCarBadge /></Col>
        </Row>
    );
}

export default TopMenuMain