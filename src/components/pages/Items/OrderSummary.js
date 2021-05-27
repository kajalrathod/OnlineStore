import React, { useContext } from 'react';
import { Table, Button, Icon, Item } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const OrderSummary = () => {
    //   const { cartItems } = useContext(CartContext);
    // const subTotal = cart.reduce((acc, curr) => acc + curr.price, 0);
    const additionalFee = 1;
    const estimatedTax = 0;
    const { cartItems, total, itemCount } = useContext(CartContext);
    let tempTotal = cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
    const ESTIMATED_TOTAL = (tempTotal + additionalFee + estimatedTax).toFixed(2);
    return (
        <>
            <div style={{ margin: '20px' }}>
                <h2 className="ui header"> Order Summary</h2>
            </div>
            <Item.Group>
                <Item>
                    <Icon circular name='shopping bag' size='huge' />
                    <Item.Content>
                        <Item.Header>Picking up in </Item.Header>
                        {/* <Item.Meta>1395 East St, New Britain, CT 06051
    </Item.Meta> */}
                        <Item.Description>
                            <h4>1395 East St, New Britain, CT 06051</h4>
                            <Button color='brown'>Change</Button>
                        </Item.Description>
                        <Item.Extra>     Open today 9:00 am - 10:00 pm</Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
            <Table basic='very'>
                <Table.Body >
                    {/* <Table.Row as={Link}>
        <Table.Cell><Icon name='plus' />Add Promo code </Table.Cell>
    </Table.Row> */}
                    <Table.Row>
                        <Table.Cell>SubTotal : </Table.Cell>
                        <Table.Cell style={{ textAlign: 'right' }}>${tempTotal}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Additional Fees : </Table.Cell>
                        <Table.Cell style={{ textAlign: 'right' }}>${additionalFee}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Estimated Tax : </Table.Cell>
                        <Table.Cell style={{ textAlign: 'right' }}>${estimatedTax}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>ESTIMATED  TOTAL : </Table.Cell>
                        <Table.Cell style={{ textAlign: 'right' }}>${ESTIMATED_TOTAL}</Table.Cell>
                    </Table.Row>
                    {/* <Table.Row>
                        <Table.Cell><Button color='olive' as={Link} to="/checkOut">Secure CheckOut</Button></Table.Cell>
                    </Table.Row> */}
                </Table.Body>
            </Table>
        </>
    );
}


