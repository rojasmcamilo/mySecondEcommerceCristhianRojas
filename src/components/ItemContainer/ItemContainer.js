import './ItemContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import Prueba from '../../image/logo/Azuleno.png'



function ItemContainer (props) {
    const {title, description , price}= props;
    return (
        <div className="item-container py-2 px-3">
            <img src={Prueba} alt="imagen de prueba" />
            <h3>{title}</h3>
            <p> {description} </p>
            <p> {price} </p>
            <ItemCount />
            <button className="btn btn-outline-primary" >Agregar al carrito</button>
        </div>
    );
}

export default ItemContainer;