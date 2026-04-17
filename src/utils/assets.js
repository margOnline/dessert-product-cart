export const convertImgFilename = (filename) => {
  return new URL(filename, import.meta.url).href
}
const addToCartIcon = convertImgFilename('../assets/images/icon-add-to-cart.svg')
const decrementIcon = convertImgFilename('../assets/images/icon-decrement-quantity.svg')
const incrementIcon = convertImgFilename('../assets/images/icon-increment-quantity.svg')
const removeFromCartIcon = convertImgFilename('../assets/images/icon-remove-item.svg')
const carbonNeutralIcon = convertImgFilename('../assets/images/icon-carbon-neutral.svg')
const emptyCartIcon = convertImgFilename('../assets/images/illustration-empty-cart.svg')
const orderConfirmedIcon = convertImgFilename('../assets/images/icon-order-confirmed.svg')

export const icons = {
  addToCart: addToCartIcon,
  emptyCart: emptyCartIcon,
  increment: incrementIcon,
  decrement: decrementIcon,
  removeFromCart: removeFromCartIcon,
  carbonNeutral: carbonNeutralIcon,
  orderConfirmed: orderConfirmedIcon,
}
