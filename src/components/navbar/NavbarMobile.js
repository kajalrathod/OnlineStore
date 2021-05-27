import React, { useState } from 'react';
import { Header, Icon, Image, Menu, Segment, Sidebar, Dropdown, Input, Select } from 'semantic-ui-react';
import './navbar.css';
import { Link } from 'react-router-dom';

export const NavbarMobile = ({ selected, onToggle }) => {
    const [visible, setVisible] = useState('visible');
    const [activeItem, setActiveItem] = useState('Home');

    return (
        <>
            <Menu>
                <Menu.Item onClick={onToggle} >
                    <Icon name="sidebar" />
                </Menu.Item>
            </Menu>
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={() => setVisible(true)}
                    vertical
                    visible={selected}

                >
                    <Menu.Item
                        name='account'

                    />
                    <Menu.Item
                        name='settings'

                    />
                    <Dropdown item text='Display Options'>
                        <Dropdown.Menu>
                            <Dropdown.Header>Text Size</Dropdown.Header>
                            <Dropdown.Item>Small</Dropdown.Item>
                            <Dropdown.Item>Medium</Dropdown.Item>
                            <Dropdown.Item>Large</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Sidebar>
                <Sidebar.Pusher>

                    <Segment basic>
                        {/* <Header as='h3'>Application Content</Header>
                        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>

        </>
    )
}