export const productInfo = (data) => {
  console.log("---Shopping Cart---");
  console.log('Data received by productInfo Action--->', data);
  return {
    type: 'PRODUCT_INFO',
    data
  }
}

export const addProduct = (data) => {
  console.log("---Shopping Cart---");
  console.log('Data received by addProduct Action--->', data);
  return {
    type: 'ADD_PRODUCT',
    data
  }
}

export const clearProducts = (data) => {
  console.log("---Shopping Cart---");
  console.log('Data received by clearProducts Action--->', data);
  return {
    type: 'CLEAR_PRODUCTS',
    data
  }
}

export const deleteProduct = (data) => {
  console.log("---Shopping Cart---");
  console.log('Data received by deleteProduct Action--->', data);
  return {
    type: 'DELETE_PRODUCT',
    data
  }
}

export const increment = data => {
  return {
    type: 'INCREMENT',
    data
  };
};

export const decrement = data => {
  return {
    type: 'DECREMENT',
    data
  };
};

export const billingAction = (data) => {
  console.log("billing Action Called");
  return {
    type: "CHECKOUT",
    data
  }
}

export const updatesize = (data) => {
  console.log("---Shopping Cart---");
  console.log('Data received by update Action--->', data);
  return {
    type: 'SIZE_UPDATE',
    data
  }
}

export const updatecolor = (data) => {
  console.log("---Shopping Cart---");
  console.log('Data received by update Action--->', data);
  return {
    type: 'COLOR_UPDATE',
    data
  }
}

export const addSize = (data) => ({
  type : "ADD_SIZE",
  data
})