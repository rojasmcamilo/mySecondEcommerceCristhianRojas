import './ItemListContainer.css';
import ItemContainer from '../ItemContainer/ItemContainer';

function ItemListContainer (props) {
    const { title } = props;
    return (
        <div className="itemListContainer px-3 py-3 ">
            <h2> {title} </h2>

            <ItemContainer title='Titulo de Pruebla' description='Descripcion de prueba' price='$500' />
            <ItemContainer title='Titulo de Pruebla' description='Descripcion de prueba' price='$500' />
            <ItemContainer title='Titulo de Pruebla' description='Descripcion de prueba' price='$500' />
            <ItemContainer title='Titulo de Pruebla' description='Descripcion de prueba' price='$500' />

        </div>
    );
}

export default ItemListContainer;