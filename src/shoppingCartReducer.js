const shoppingCartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {

            const existedItem = state.find(item => item.id === action.data.id);

            if (existedItem) {
                console.log('inside existed block')
                existedItem.quantity += 1;

                return state.map(item => {
                    if (item.id === existedItem.id) {
                        return existedItem;
                    }
                    return item;
                })
            } else {
                console.log('inside existed else block')
                action.data.quantity = 1;
                return [...state, action.data]
            }
        }
        case "ADD_SIZE": {
            let addedItem = state.find(item=> item.id === action.data.id);
            addedItem.size = action.data.size;
            let updatedItems = state.map(item=>{
                if(item.id===action.data.id){
                    return addedItem
                }
                return item;
            })
            return{
                ...state, updatedItems,
            }
        }
        case 'CLEAR_PRODUCTS': {
            state.length = 0;
            return [];
        }
        case 'DELETE_PRODUCT': {
            console.log('To Be Deleted Product ID = ', action.data.id); 
            const filteredArray = state.filter(item => item.id != action.data.id);
            console.log('Index Returned by findIndex = ', filteredArray);
            return filteredArray;
        }
        case 'INCREMENT': {
            const findItem = state.find(item => item.id === action.data.id);
            findItem.quantity += 1
            return state.map(item => {
                if (item.id === action.data.id) {
                    return findItem;
                }
                return item;
            })
        }
        case 'DECREMENT': {
            const findItem = state.find(item => item.id === action.data.id);
            findItem.quantity -= 1
            return state.map(item => {
                if (item.id === action.data.id) {
                    return findItem;
                }
                return item;
            })
        }
        case 'SIZE_UPDATE': {
            console.log('size update reducer', action.data.size);
            const findItem = state.find(item => item.id === action.data.id);
            findItem.size = action.data.size;
            console.log('redux state object', state);
            console.log('action inside size update', action)
            return state.map(item => {
                if (item.id === action.data.id) {
                    console.log('inside if block of state map', action.data.id)
                    return findItem
                }
                return item;
            })
            // let filter = state.filter(item => item.id == action.data.id);
            // return filter;

        }
        case 'COLOR_UPDATE': {
            console.log('color update reducer', action.data.color);
            const findItem = state.find(item => item.id === action.data.id);
            findItem.color = action.data.color;
            console.log('redux state object', state);
            console.log('action inside color update', action)
            return state.map(item => {
                if (item.id === action.data.id) {
                    console.log('inside if block of state map', action.data.id)
                    return findItem
                }
                return item;
            })
            // let filter = state.filter(item => item.id == action.data.id);
            // return filter;

        }
        default: {
            return state;
        }
    }
}

export default shoppingCartReducer;


