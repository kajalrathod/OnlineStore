import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { ItemCard } from '../Items/ItemCard';
import '../Items/items.css';

const Wine = (props) => {
    const data = props.location.data;
    const [product] = useContext(ProductContext);
    return (
        <>
             {data}
            <div className="image-list">
                {product.map(item => {
                    return (
                        <div className="ui cards" key={item.id}>
                            <ItemCard title={item.title} price={item.price} img={item.img} desc={item.desc} id={item.id} />
                        </div>
                    );
                })}
            </div>
        </>
    );

}

export default Wine;