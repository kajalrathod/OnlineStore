import React from 'react';
import {
    Dropdown, Grid, Menu, Input, Container,
    Icon,
    Image,
    Sidebar,
    Responsive
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class NavbarDesktop extends React.Component {
    state = { activeItem: 'Home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });

    }
    render() {
        const { activeItem } = this.state;

        return (
            <div>
                <Menu secondary>
                    <Menu.Item
                        name='Home'
                        active={activeItem === 'Home'}
                        onClick={this.handleItemClick}
                        as={Link} to='/'>
                    </Menu.Item>
                    <Dropdown item
                        text="Spirit"
                        className={activeItem === 'Spirit' ? 'active' : ''}
                        name='Spirit' onClick={this.handleItemClick}>
                        <Dropdown.Menu>
                            <Dropdown.Header icon='tags' content='By Type' />
                            <Dropdown.Item text="Vodka" as={Link}
                                to={{
                                    pathname: `/spirit/vodka`,
                                    data: 'Vodka'
                                }} />
                            <Dropdown.Item text="Scotch" as={Link}
                                to={{
                                    pathname: `/spirit/scotch`,
                                    data: 'Scotch'
                                }} />
                            <Dropdown.Item text="Bourbon" as={Link}
                                to={{
                                    pathname: `/spirit/bourbon`,
                                    data: 'Bourbon'
                                }} />
                            <Dropdown.Item text='Whiskey' as={Link} to={{
                                pathname: "/spirit/whiskey",
                                data: "Whiskey"
                            }} />
                            <Dropdown.Item text='Rum' as={Link} to={{
                                pathname: "/spirit/rum",
                                data: "Rum"
                            }} />
                            <Dropdown.Item text='Tequila' as={Link} to={{
                                pathname: "/spirit/tequila",
                                data: "Tequila"
                            }} />
                            <Dropdown.Item text='Gin' as={Link} to={{
                                pathname: "/spirit/gin",
                                data: "Gin"
                            }} />
                            <Dropdown.Item text='Liquor, Cordinals & Schnapps' as={Link} to={{
                                pathname: "/spirit/liquor",
                                data: "Liquor"
                            }} />
                            <Dropdown.Item text='Brandy & Cognac' as={Link} to={{
                                pathname: "/spirit/brandy",
                                data: "Brandy"
                            }} />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item
                        text='Wine'
                        className={activeItem === 'Wine' ? 'active' : ''}
                        name='Wine' onClick={this.handleItemClick}>
                        <Dropdown.Menu style={{ minWidth: 'max-content' }}>
                            <Grid columns={4} padded divided>
                                <Grid.Column>
                                    <Dropdown.Header className="GridHeader" icon='tags' content='By Wine Type' />
                                    <Dropdown.Item text='Red' as={Link} to={{ pathname: '/wine/red', data: 'Red' }} />
                                    <Dropdown.Item text='White' as={Link} to={{ pathname: '/wine/white', data: 'White' }} />
                                    <Dropdown.Item text='Rose' as={Link} to={{ pathname: '/wine/rose', data: 'Rose' }} />
                                    <Dropdown.Item text='Sparkling' as={Link} to={{ pathname: '/wine/sparking', data: 'Sparkling' }} />
                                    <Dropdown.Item text='Blend' as={Link} to={{ pathname: '/wine/blend', data: 'Blend' }} />
                                    <Dropdown.Item text='Dessert' as={Link} to={{ pathname: '/wine/dessert', data: 'Dessert' }} />
                                    <Dropdown.Item text='Port' as={Link} to={{ pathname: '/wine/port', data: 'Port' }} />
                                </Grid.Column>
                                <Grid.Column >
                                    <Dropdown.Header className="GridHeader" icon='tags' content='By Grapes Variety' />
                                    <Dropdown.Item text='Cabernet Sauvignon' />
                                    <Dropdown.Item text='Merlot' />
                                    <Dropdown.Item text='Pinot Grigio' />
                                    <Dropdown.Item text='Pinot Noir' />
                                    <Dropdown.Item text='Shiraz / Syrah' />
                                    <Dropdown.Item text='Riesling' />
                                    <Dropdown.Item text='Sauvignon Blanc' />
                                </Grid.Column>
                                <Grid.Column>
                                    <Dropdown.Header className="GridHeader" icon='tags' content='By Wine Country' />
                                    <Dropdown.Item text='France' />
                                    <Dropdown.Item text='Italy' />
                                    <Dropdown.Item text='Spain' />
                                    <Dropdown.Item text='Germany' />
                                    <Dropdown.Item text='Argentina' />
                                    <Dropdown.Item text='United States' />
                                    <Dropdown.Item text='New Zealand' />
                                </Grid.Column>
                                <Grid.Column>
                                    <Dropdown.Header className="GridHeader" icon='tags' content='By Wine Regions' />
                                    <Dropdown.Item text='Bordeaux' />
                                    <Dropdown.Item text='Tuscany' />
                                    <Dropdown.Item text='Rioja' />
                                    <Dropdown.Item text='Burgundy' />
                                    <Dropdown.Item text='Napa Valley' />
                                </Grid.Column>
                            </Grid>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item
                        text='Beer'
                        className={activeItem === 'Beer' ? 'active' : ''}
                        name='Beer' onClick={this.handleItemClick}>
                        <Dropdown.Menu style={{ minWidth: 'max-content' }}>
                            <Grid columns={3} padded divided>
                                <Grid.Column>
                                    <Dropdown.Header className="GridHeader" icon='tags' content='By Categories' />
                                    <Dropdown.Item text='Crafted Beer' />
                                    <Dropdown.Item text='Import Beer' />
                                    <Dropdown.Item text='Big Domestic Breweries' />
                                    <Dropdown.Item text='Seasonal & Special Release' />
                                    <Dropdown.Item text='Kegs' />
                                    <Dropdown.Item text='Cider' />
                                    <Dropdown.Item text='Cooler & Malt Beverages' />
                                </Grid.Column>
                                <Grid.Column>
                                    <Dropdown.Header className="GridHeader" icon='tags' content='By Types' />
                                    <Dropdown.Item text='IPA' />
                                    <Dropdown.Item text='Belgian-Style Ale' />
                                    <Dropdown.Item text='Wheat Ale' />
                                    <Dropdown.Item text='Pale Ale' />
                                    <Dropdown.Item text='Stout' />
                                    <Dropdown.Item text='Rose Cider' />
                                    <Dropdown.Item text='New England Hazy IPA' />
                                    <Dropdown.Item text='Amber & Red Ale' />
                                    <Dropdown.Item text='View All Ale' />
                                    <Dropdown.Item text='View All Lager' />
                                </Grid.Column>
                                <Grid.Column>
                                    <Dropdown.Header className="GridHeader" icon='tags' content='By Country' />
                                    <Dropdown.Item text='United States' />
                                    <Dropdown.Item text='Belgium' />
                                    <Dropdown.Item text='Germany' />
                                    <Dropdown.Item text='England' />
                                    <Dropdown.Item text='Mexico' />
                                    <Dropdown.Item text='Ireland' />
                                </Grid.Column>
                            </Grid>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item
                        text="Accessories"
                        className={activeItem === 'Accessories' ? 'active' : ''}
                        name='Accessories' onClick={this.handleItemClick}>
                        <Dropdown.Menu>
                            <Dropdown.Item text='' icon='user' to='/Home' />
                            <Dropdown.Item text='' icon='settings' to='/cart' />
                            <Dropdown.Item text='' icon='sign out' to='/sign-out' />
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item
                        name='Deals'
                        active={activeItem === 'Deals'}
                        onClick={this.handleItemClick}
                        as={Link} to='/' >
                    </Menu.Item>
                    <Menu.Item
                        name='About Us'
                        active={activeItem === 'About Us'}
                        onClick={this.handleItemClick}
                        as={Link} to='/' >
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        {/* <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item> */}
                        {/* <Menu.Item
                            name=''
                            active={activeItem === 'cart'}
                            onClick={this.handleItemClick}
                            icon='shopping cart'
                            as={Link} to='/cart'
                        /> */}
                    </Menu.Menu>

                </Menu>
            </div >
        )
    }
}

export default NavbarDesktop;



