

export function getCart() {
    let cart = localStorage.getItem("cart");
    cart = JSON.parse(cart);

    if (cart == null) {
        cart = []
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    return cart
}


export function removeFromCart(productId) {
    const cart = getCart();

    const newCart = cart.filter(
        (item) => {
            return item.productId != productId
        }
    )

    localStorage.setItem("cart", JSON.stringify(newCart))
}


export function addToCart(product, quantity) {
    const cart = getCart();

    let index = cart.findIndex(
        item => item.productId == product.productId
    )

    if (index == -1) {
        cart[cart.length] = {
            productId: product.productId,
            name: product.name,
            image: product.images[0],
            labeledPrice: product.labeledPrice,
            price: product.price,
            quantity: quantity
        }
    } else {
        const newQuantity = cart[index].quantity + quantity
        if (newQuantity <= 0) {
            removeFromCart(product.productId)
            return
        } else {
            cart[index].quantity = newQuantity
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart))
}



export function getTotal() {
    let cart = getCart();

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].labeledPrice * cart[i].quantity
    }

    return total
}




export function getDiscountedTotal() {
    let cart = getCart();

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }

    return total;
}