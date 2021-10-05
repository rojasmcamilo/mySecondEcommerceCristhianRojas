import { useEffect, useState } from 'react';
import './ItemList.css';
import ItemContainer from '../ItemContainer/ItemContainer';
import data from '../../data/data';

function ItemList () {
    const [products, setProduct] = useState([])
    const getProducts = new Promise ( (resolve) =>{
        setTimeout( () =>{
            const productList = data;

            resolve(productList)
        }, 2000 )
    })

    useEffect( () => {
        getProducts.then( (res) => {
            setProduct(res)
        })
    }, [])

    return (
        <div>
            {products.map( (product, index) => {
                return ( <ItemContainer title={product.title} price={product.price} description={product.description} />)
            } ) }
        </div>
    );
}
export default ItemList;