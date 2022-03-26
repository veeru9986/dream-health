export const cartTotal = (cart) => {
  try {
    const subTotal = cart.reduce(
      (counter, product) => counter + (product.price * product.cartQuantity),
      0
    );

    return subTotal;
  } catch (err) {}
};

export const cartTotal1 = (cart) => {
  try {
    const subTotal = cart.reduce(
      (counter, product) => counter + product.price,
      0
    );

    return subTotal;
  } catch (err) {}
};

export const cartSubTotal1 = (cart, taxRate) => {
  try {
    const subTotal = cartTotal1(cart);
    const total = subTotal + subTotal * taxRate;
    const inrTotal = total.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return inrTotal;
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
export const getDetails = () => {
  try {
    const details = localStorage.getItem("token")
      ? JSON.parse(sessionStorage.getItem("token"))
      : [];
    return details;
  } catch (err) {}
};

export const saveToken = (token) => {
  sessionStorage.setItem("token", JSON.stringify(token));
};
export const saveUser = (user) => {
  sessionStorage.setItem("user", JSON.stringify(user));
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
