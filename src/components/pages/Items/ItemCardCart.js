import React, { useContext } from 'react';
import { Table, Dropdown, Grid, Responsive, Item, Label, Icon } from 'semantic-ui-react';
import './items.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const ItemCardCart = (props, { CartItems }) => {
    const { title, img, price, desc, id, quantity } = props;

    const { decrease, removeProduct, increase } = useContext(CartContext);
    let totalprice = price * quantity;
    //const [cart, setCart] = useContext(CartContext);

    // const deleteItem = (id) => {
    //     // setCart(cart.filter(crt => crt.id !== id));
    // }

    return (
        <>
            <Table>
                <Table.Body >
                    <Table.Row>
                        <Responsive as={Table.Cell} minWidth={Responsive.onlyMobile.minWidth} >
                            <Grid divided columns={2}>
                                <Grid.Row>
                                    <Grid.Column width={13}>
                                        <Item.Group divided>
                                            <Item>
                                                <Item.Image src={img} />
                                                <Item.Content>
                                                    <Item.Header>{title}</Item.Header>
                                                    <Item.Meta>
                                                        <span className='cinema'>here</span>
                                                    </Item.Meta>
                                                    <Item.Description>{desc}</Item.Description>
                                                    <Item.Extra>
                                                        <Label onClick={() => removeProduct(props)}>Delete</Label>
                                                        <Link to="/cart"><Label>Move to list</Label></Link>
                                                        <Link to="/cart" onClick={() => increase(props)}><i className="plus circle icon"></i></Link>
                                                        {
                                                            quantity > 1 &&
                                                            < Link to="/cart" onClick={() => decrease(props)}><i className="minus circle icon"></i></Link>
                                                        }
                                                        {
                                                            quantity === 1 &&
                                                            < Link to="/cart" onClick={() => removeProduct(props)}><i className="minus circle icon"></i></Link>
                                                        }
                                                    </Item.Extra>
                                                    Quantity :   {quantity}
                                                </Item.Content>
                                            </Item>
                                        </Item.Group>
                                    </Grid.Column>
                                    <Grid.Column width={3}>
                                        $ {totalprice}
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Responsive>
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    );
}


{/* <Header >
                                            <Image src={img} rounded />
                                            <Header.Content>
                                                {title}
                                                <Header.Subheader>{desc}</Header.Subheader>
                                            </Header.Content>
                                        </Header> */}

{/* <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        kjlkwejfkektfjkerhtjkhkjrehrkhewkljrhelkjht rjkelhtjkrehtjklhre thrjekthlkrehglretln frjehgkrjlhe;lfgnfh;krw
                        <Image src='/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <Image src='/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                </Grid.Row>
            </Grid> */}