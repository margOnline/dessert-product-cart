import addToCartIcon from '../assets/images/icon-add-to-cart.svg'
import emptyCartIcon from '../assets/images/illustration-empty-cart.svg'
import incrementIcon from '../assets/images/icon-increment-quantity.svg'
import decrementIcon from '../assets/images/icon-decrement-quantity.svg'
import removeFromCartIcon from '../assets/images/icon-remove-item.svg'
import carbonNeutralIcon from '../assets/images/icon-carbon-neutral.svg'
import orderConfirmedIcon from '../assets/images/icon-order-confirmed.svg'

export const convertImgFilename = (filename) => {
  return new URL(filename, import.meta.url).href
}


export const icons = {
  addToCart: addToCartIcon,
  emptyCart: emptyCartIcon,
  increment: incrementIcon,
  decrement: decrementIcon,
  removeFromCart: removeFromCartIcon,
  carbonNeutral: carbonNeutralIcon,
  orderConfirmed: orderConfirmedIcon,
}
