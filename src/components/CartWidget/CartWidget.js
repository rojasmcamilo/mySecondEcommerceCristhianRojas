import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


function CartWidget () {
    return (
        <div>
            <FontAwesomeIcon icon={faCartArrowDown} className="icon-cart"/>
        </div>
    );
}

export default CartWidget;