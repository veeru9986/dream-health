export const cartTotal = (cart) => {
  try {
    const subTotal = cart.reduce(
      (counter, product) => counter + product.price,
      0
    );

    return subTotal;
  } catch (err) {}
};

export const cartSubTotal = (cart, taxRate) => {
  try {
    const subTotal = cartTotal(cart);
    const total = subTotal + subTotal * taxRate;
    const inrTotal = total.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return inrTotal;
  } catch (err) {}
};

export const getToken = () => {
  try {
    const token = sessionStorage.getItem("token")
      ? JSON.parse(sessionStorage.getItem("token"))
      : "";
    return token;
  } catch (err) {}
};

export const saveToken = (token) => {
  sessionStorage.setItem("token", JSON.stringify(token));
};

// export const removeCart = (strapiId) => {
//   const cart = getCart()
//   const indexOfProduct = cart.findIndex((C) => C.strapiId === strapiId)
//   cart.splice(indexOfProduct, 1)
// }
// export const cartTotal = (cart) => {
//   const subTotal = subTotal(cart)
//   const total = subTotal + subTotal * taxRate
//   return Math.round(total)
// }
