import React, { useContext, useState, useEffect, useRef } from 'react';
import { Rating, Button, Card, Image } from 'semantic-ui-react';
import './items.css';
import { CartContext } from '../../context/CartContext';


export const ItemCard = (props) => {
    const { title, img, price, desc, id } = props;

    const number = 4;
    const { addProduct, cartItems, increase } = useContext(CartContext);
    const isInCart = prod => {
        return cartItems.find(item => item.id === prod.id);
    }

    return (
        <Card>
            <Image src={img} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>Price : ${price}</span>
                </Card.Meta>
                <Card.Description>
                    {desc}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <span className="right floated">
                    {
                        isInCart(props) &&
                        <Button onClick={() => increase(props)} icon='plus' />
                    }
                    {
                        !isInCart(props) &&
                        <Button onClick={() => addProduct(props)} icon='shopping cart' />
                    }
                </span>
                Rating:
                 <Rating icon='heart' defaultRating={number} maxRating={5} />
            </Card.Content>
        </Card>

    );
}


// let initialValue = 'shopping cart';
// let quan = 0;
// const [icon, setIcon] = useState(initialValue);
// const isInitialMount = useRef(true);


// const [icon, setIcon] = useState(() => window.localStorage.getItem(index) || initialValue);
// const [icon, setIcon] = useLocalStorage('icon', 'shopping cart');

// useEffect((index) => {
//     window.localStorage.setItem('icon', icon);
// }, [icon, index]);

// const useLocalStorage = (key, initialValue) => {
//     console.log("hee");
//     const [item, setInnerValue] = useState(
//         () => {
//             if (window.localStorage.getItem(key) !== null) {
//                 try {
//                     return JSON.parse(window.localStorage.getItem(key));
//                 } catch (error) {
//                 }
//             }
//             console.log(initialValue);
//             return initialValue;
//         },
//     );
//     const setValue = (value) => {
//         console.log("item" + item)
//         setInnerValue('check');
//         window.localStorage.setItem(key, JSON.stringify('check'));

//     };

//     return [item, setValue];
// }

// <div className="card" >
//     <div className="image">
//         <img src={img} alt={title} />
//     </div>
//     <div className="content">
//         <a className="header">{title}</a>
//         <div className="meta">
//             <span className="date">Price : {price}</span>
//         </div>
//         <div className="description">
//             {desc}
//         </div>
//     </div>
//     <div className="extra">
//         <span className="right floated">
//             {/* <Link to='/cart'> */}
//             <button className="ui button" onClick={addToCart}>
//                 <i className="shopping cart icon"></i>
//             </button>
//             {/* </Link> */}
//         </span>
//         Rating:
//         <Rating icon='heart' defaultRating={number} maxRating={5} />
//     </div>
// </div>
{/* <Button onClick={() => addToCart(id)} icon='shopping cart'>
                        <Button.Content visible ></Button.Content> */}
{/* <Icon name={icon} /> */ }
{/* <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content> */}
{/* </Button> */ }
{/* <button className="ui button" onClick={() => addToCart(id)}>
                        <i className={icon}></i>
                    </button> */}