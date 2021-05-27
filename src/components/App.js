import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CWSheader from './header/CWSheader';
import Footer from './footer/Footer';
import Main from './pages/Main';
import Spirit from './pages/spirit/Spirit';
import Wine from './pages/wine/Wine';
import Navbar from './navbar/Navbar';
import Cart from './cart/Cart';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { CheckOut } from '../components/pages/checkOut/CheckOut';
import { SignInForm } from '../components/pages/checkOut/SignInForm';

const App = () => {
    return (
        <ProductProvider>
            <CartProvider>
                <div className="ui container">
                    <BrowserRouter >
                        <CWSheader />
                        <Navbar />
                        <Switch>
                            <Route path="/" exact component={Main} />
                            <Route path="/spirit/:name" exact component={Spirit} />
                            <Route path="/wine/:name" exact component={Wine} />
                            <Route path="/cart" exact component={Cart} />
                            <Route path="/checkOut" exact component={CheckOut} />
                            <Route path="/signIn" exact component={SignInForm} />
                            <Main />
                        </Switch>
                    </BrowserRouter>
                    <Footer />
                </div>
            </CartProvider>
        </ProductProvider>
    );
}

export default App;