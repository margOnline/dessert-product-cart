import { ref } from 'vue'
export const state = ref({
  cartQty: 0,
  cartTotal: 0,
  cartProducts: [],
  orderConfirmed: false,
})

export const computeCartQty = () => {
  return isCartEmpty() ? 0 : cartProducts().reduce((acc, product) => acc + product.qty, 0)
}
export const computeCartTotal = () => {
  const total = isCartEmpty()
    ? 0
    : cartProducts().reduce((acc, product) => acc + product.price * product.qty, 0)

  return total.toFixed(2)
}
export const findCartProduct = (productName) => {
  return cartProducts().find((product) => product.name === productName)
}
export const removeCartProduct = (productName) => {
  const filteredCart = cartProducts().filter((product) => product.name !== productName)
  state.value.cartProducts = filteredCart
  state.value.cartTotal = computeCartTotal()
  state.value.cartQty = computeCartQty()
}
function isCartEmpty() {
  state.value.cartProducts.length === 0
}
function cartProducts() {
  return state.value.cartProducts
}
