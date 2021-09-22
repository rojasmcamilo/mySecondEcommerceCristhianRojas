import './ItemContainer.css';
import Prueba from '../../image/logo/Azuleno.png'

function ItemContainer (props) {
    const {title, description , price}= props;
    return (
        <div className="item-container py-2 px-3">
            <img src={Prueba} alt="imagen de prueba" />
            <h3>{title}</h3>
            <p> {description} </p>
            <p> {price} </p>
        </div>
    );
}

export default ItemContainer;