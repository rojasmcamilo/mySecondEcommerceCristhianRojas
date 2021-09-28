import './ItemCount.css';

import { useState } from 'react';

function ItemCount () {
    const [num, setNum] = useState(1);
    const incNum = (e) => {
        if ( num === 20){
            e.preventDefault()
            alert("No se pueden agregar mas de 20 productos.")
        } else{
            setNum(num + 1);
        }
        
    }

    const decNum = (e) => {
        if( num === 1){
            e.preventDefault();
        } else{
            setNum(num-1)
        }
    }
    return (
        <div>
               
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="input-group-text" id="basic-addon1" onClick={decNum}>-</button>
                    </div>
                    <input type="number" class="form-control contador" value={num} min="1" max="20" aria-label="Username" aria-describedby="basic-addon1" />
                    <div class="input-group-append">
                        <button class="input-group-text" id="basic-addon1" onClick={incNum}>+</button>
                    </div>
                </div>

        </div>
    );
}

export default ItemCount;