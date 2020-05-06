import React from 'react'
import { Layout} from 'antd'
import TopMenuBusinessDetail from './TopMenuBusinessDetail'
import TopMenuMain from './TopMenuMain'
import { useRouteMatch } from "react-router-dom";

const Header = Layout.Header;

function HeaderMenu () {
    let match = useRouteMatch("/business/:id")
    return (
        <Header style={{ borderBottom: '1px solid #808080', paddingLeft: '16px', paddingRight: '16px' }}>
            {
                match 
                ?<TopMenuBusinessDetail />
                :<TopMenuMain />
            }
        </Header>
    );
}

export default HeaderMenu;