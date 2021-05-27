import React, { useContext, useEffect, useStatel, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { ItemCardCart } from '../pages/Items/ItemCardCart';
import { Grid, Responsive, Button } from 'semantic-ui-react';
import { OrderSummary } from '../pages/Items/OrderSummary';
import { Link } from 'react-router-dom';

const Cart = () => {
    //   const [cart, setCart] = useContext(CartContext);
    const { cartItems, total, itemCounts } = useContext(CartContext);
    return (
        <>
            <Grid >
                <Responsive as={Grid} minWidth={Responsive.onlyComputer.minWidth}>
                    <Grid.Column width={10}>
                        <div style={{ margin: '20px' }}>
                            <h2 className="ui header"> Your Shopping Cart</h2>
                        </div>
                        {cartItems.map(cart => {
                            return (
                                <div className="ui cards" key={cart.id}>
                                    <ItemCardCart quantity={cart.quantity} title={cart.title} price={cart.price} img={cart.img} desc={cart.desc} id={cart.id} />
                                    {/* <ItemCardCart cart={cart} /> */}
                                </div>
                            );
                        })}
                    </Grid.Column>
                    <Grid.Column width={6} >
                        {
                            cartItems.length > 0 &&
                            <>
                                <OrderSummary />
                                <Button color='olive' as={Link} to="/checkOut">Secure CheckOut</Button>
                            </>
                        }

                    </Grid.Column>
                    {
                        cartItems.length === 0 &&
                        <h1>Your cart is Empty.</h1>
                    }
                </Responsive>

                <Responsive as={Grid} {...Responsive.onlyTablet}>
                    <Grid.Column width={10}>
                        <div style={{ margin: '20px' }}>
                            <h2 className="ui header"> Your Shopping Cart</h2>
                        </div>
                        {cartItems.map(cart => {
                            return (
                                <div className="ui cards" key={cart.id}>
                                    <ItemCardCart quantity={cart.quantity} title={cart.title} price={cart.price} img={cart.img} desc={cart.desc} id={cart.id} />
                                    {/* <ItemCardCart cart={cart} /> */}
                                </div>
                            );
                        })}
                    </Grid.Column>
                    <Grid.Column width={6} >
                        {
                            cartItems.length > 0 &&
                            <>
                                <OrderSummary />
                                <Button color='olive' as={Link} to="/checkOut">Secure CheckOut</Button>
                            </>
                        }

                    </Grid.Column>
                    {
                        cartItems.length === 0 &&
                        <h1>Your cart is Empty.</h1>
                    }
                </Responsive>

                <Responsive as={Grid} maxWidth={786}>
                    <Grid.Column width={16}>
                        <div style={{ margin: '20px' }}>
                            <h2 className="ui header"> Your Shopping Cart</h2>
                        </div>
                        {cartItems.map(cart => {
                            return (
                                <div className="ui cards" key={cart.id}>
                                    <ItemCardCart quantity={cart.quantity} title={cart.title} price={cart.price} img={cart.img} desc={cart.desc} id={cart.id} />
                                    {/* <ItemCardCart cart={cart} /> */}
                                </div>
                            );
                        })}
                    </Grid.Column>
                    <Grid.Column width={16} >
                        {
                            cartItems.length > 0 &&
                            <>
                                <OrderSummary />
                                <Button color='olive' as={Link} to="/checkOut">Secure CheckOut</Button>
                            </>
                        }
                    </Grid.Column>
                    {
                        cartItems.length === 0 &&
                        <h1>Your cart is Empty.</h1>
                    }
                </Responsive>

            </Grid>
        </>
    );
}

export default Cart;







// const useStateWithLocalStorage = localStorageKey => {
//     const [value, setValue] = React.useState(
//         localStorage.getItem(localStorageKey) || ''
//     );

//     React.useEffect(() => {
//         localStorage.setItem(localStorageKey, value);
//     }, [localStorageKey, value]);

//     return [value, setValue];
// };


// const useStateWithLocalStorage = localStorageKey => {
//     const [cart, setCart] = useState(
//         localStorage.getItem(localStorageKey) || ''
//     );

//     React.useEffect(() => {
//         localStorage.setItem(localStorageKey, cart);
//     }, [cart, localStorageKey]);

//     return [cart, setCart];
// };

// const Cart = () => {
//     const [cart, setCart] = useStateWithLocalStorage('myValueInLocalStorage');

//     return (
//         <>
//             <div style={{ margin: '20px' }}>
//                 <h2 className="ui header"> Your Shopping Cart</h2>
//             </div>
//             {cart.map(cart => {
//                 return (
//                     <div className="ui cards" key={cart.id}>
//                         <ItemCardCart title={cart.title} price={cart.price} img={cart.img} desc={cart.desc} id={cart.id} />
//                     </div>
//                 );
//             })}
//         </>
//     );
// }
