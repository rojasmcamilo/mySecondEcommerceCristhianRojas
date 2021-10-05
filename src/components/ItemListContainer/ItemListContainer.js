import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer (props) {
    const { title } = props;
    return (
        <div className="itemListContainer px-3 py-3 ">
            <h2> {title} </h2>

            <ItemList />

            <h2> {title} </h2>

            <ItemList />
            
        </div>
    );
}

export default ItemListContainer;