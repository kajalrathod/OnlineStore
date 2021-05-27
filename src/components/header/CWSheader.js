import React, { useState } from 'react';
import logo from './CWSLogo.png'
import { GoogleAuth } from '../pages/GoogleAuth';
import { Menu, Input, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CWSHeader = () => {
    return (
        <Menu secondary>
            <Menu.Item><img className="ui top aligned small image" src={logo} alt="cws" /></Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item>
                    <GoogleAuth />
                </Menu.Item>
                {/* <Menu.Item>
                    <i className="map pin big icon"></i>
                    <div className="content">
                        <div className="ui sub header"> 1395 East St</div>
                        <div className="meta">
                            <span> New Britain, CT 06051</span>
                        </div>
                    </div>
                </Menu.Item> */}
                {/* <Menu.Item
                    name=''
                    icon='shopping cart'
                    as={Link} to='/cart'
                /> */}
                <Menu.Item name='cart' as={Link} to='/cart'>
                    <Icon name='shopping cart' size='big' />
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
}

export default CWSHeader;