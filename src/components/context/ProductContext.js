import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import Item1 from '../pages/images/Pinot1.png'
import Item2 from '../pages/images/Cabernate.png'
import Item3 from '../pages/images/Melbac.png'
import Item4 from '../pages/images/Merlot.png'
import Item5 from '../pages/images/MerlotNapa.png'
import useResource from './useResource';

const ItemsList = [
    { id: 1, title: 'Pinot', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item1 },
    { id: 2, title: 'Cabernate', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item2 },
    { id: 3, title: 'Essentric Malbec', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item3 },
    { id: 4, title: 'Merlot', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item4 },
    { id: 5, title: 'Merlot Napa', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item5 },
    { id: 6, title: 'Pinot', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item1 },
    { id: 7, title: 'Cabernate', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 110, img: Item2 },
    { id: 8, title: 'Essentric Malbec', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 80, img: Item3 },
    { id: 9, title: 'Merlot', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 120, img: Item4 },
    { id: 10, title: 'Merlot Napa', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 260, img: Item5 },
    { id: 11, title: 'Pinot', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 160, img: Item1 },
    { id: 12, title: 'Cabernate', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price: 90, img: Item2 }
];


export const ProductContext = React.createContext();

export const ProductProvider = (props) => {
    // const ItemsList = useResource('photos');
   // console.log('ItemList', ItemList)
    const [product] = useState(ItemsList);
    return (
        <ProductContext.Provider value={[product]}>
            {props.children}
        </ProductContext.Provider>
    )
}