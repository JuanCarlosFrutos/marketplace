import React from 'react'
import { Typography , Button} from 'antd';
const Text = Typography.Text
export default function ShopCarBadge() {
    return (
        <Button style={{ fontSize: '18px', color: '#fff', background: '#bfbfbf'}} shape='round' icon='shopping-cart'>
            <Text style={{fontSize: '14px', color: '#fff'}}>0</Text>
        </Button>
    )
}
