import { useEffect, useState } from 'react';
import './ItemList.css';
import ItemContainer from '../ItemContainer/ItemContainer';

function ItemList () {
    const [products, setProduct] = useState([])

    const getProducts = new Promise ( (resolve) =>{
        setTimeout( () =>{
            const productList = [
                {
                    id: '1',
                    title: 'producto 1',
                    description: 'Esta es la descripcion del producto 1',
                    price : '1111',
                    img: 'img1'
                },
                {
                    id: '2',
                    title: 'producto 2',
                    description: 'Esta es la descripcion del producto 2',
                    price : '2222',
                    img: 'img2'
                },
                {
                    id: '3',
                    title: 'producto 3',
                    description: 'Esta es la descripcion del producto 3',
                    price : '3333',
                    img: 'img3'
                },
                {
                    id: '4',
                    title: 'producto 4',
                    description: 'Esta es la descripcion del producto 4',
                    price : '4444',
                    img: 'img4'
                },
                {
                    id: '5',
                    title: 'producto 5',
                    description: 'Esta es la descripcion del producto 5',
                    price : '5555',
                    img: 'img5'
                },
                {
                    id: '6',
                    title: 'producto 6',
                    description: 'Esta es la descripcion del producto 6',
                    price : '6666',
                    img: 'img6'
                }
            ]
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
                return ( <ItemContainer title={product.title} />)
            } ) }
        </div>
    );
}

export default ItemList;