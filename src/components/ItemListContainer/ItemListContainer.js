import './ItemListContainer.css';
import ItemContainer from '../ItemContainer/ItemContainer';
import ItemList from '../ItemList/ItemList';

function ItemListContainer (props) {
    const { title } = props;
    return (
        <div className="itemListContainer px-3 py-3 ">
            <h2> {title} </h2>

            <ItemList />
            
        </div>
    );
}

export default ItemListContainer;