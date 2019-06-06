import {storeProducts, detailProduct, images, color} from './data';

const initialState = {storeProducts, detailProduct, images, color}

const productReducer = (state = initialState, action) =>{
    switch(action.type) {
        case 'PRODUCT_INFO': {
            console.log("Data received by Reducer-->",action);
            return { state };
        }
        default: {
            return state;
        }
    }
}

export default productReducer;