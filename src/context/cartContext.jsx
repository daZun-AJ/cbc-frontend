import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

const STORAGE_KEY = "cbc_cart";

function loadCart() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState(loadCart);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }, [cart]);

    function addToCart(product, qty = 1) {
        setCart((prev) => {
            const existing = prev.find((item) => item.productId === product.productId);

            if (existing) {
                return prev.map((item) =>
                    item.productId === product.productId
                        ? { ...item, qty: Math.min(item.qty + qty, product.stock ?? 999) }
                        : item
                );
            }

            return [
                ...prev,
                {
                    productId: product.productId,
                    name: product.name,
                    image: product.images?.[0],
                    price: product.price,
                    stock: product.stock,
                    qty,
                },
            ];
        });
    }

    function removeFromCart(productId) {
        setCart((prev) => prev.filter((item) => item.productId !== productId));
    }

    function updateQty(productId, qty) {
        if (qty < 1) return;
        setCart((prev) =>
            prev.map((item) =>
                item.productId === productId
                    ? { ...item, qty: Math.min(qty, item.stock ?? qty) }
                    : item
            )
        );
    }

    function clearCart() {
        setCart([]);
    }

    const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQty,
                clearCart,
                itemCount,
                subtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
    return useContext(CartContext);
}
