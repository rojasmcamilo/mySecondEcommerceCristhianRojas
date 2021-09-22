import './ItemCount.css';

function ItemCount () {
    return (
        <div>
            <form>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <button class="input-group-text" id="basic-addon1">-</button>
                    </div>
                    <input type="number" class="form-control" min="1" aria-label="Username" aria-describedby="basic-addon1" />
                    <div class="input-group-append">
                        <span class="input-group-text" id="basic-addon1">+</span>
                    </div>
                </div>

               
            </form>
        </div>
    );
}

export default ItemCount;