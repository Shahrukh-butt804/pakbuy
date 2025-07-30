// store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    productId: string;
    quantity: number;
    price: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: JSON.parse(localStorage.getItem("cartItems") || "[]"),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            const existing = state.items.find((item: any) => item._id === action.payload._id);
            if (existing) {
                existing.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
            const item = state.items.find((i: any) => i._id === action.payload.productId);
            if (item && (item.quantity + action.payload.quantity) > 0) {
                item.quantity += action.payload.quantity;
                localStorage.setItem("cartItems", JSON.stringify(state.items));
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item: any) => item._id !== action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem("cartItems");
        },
    },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export const selectCartItems = (state: any) => state.cart.items;

export default cartSlice.reducer;
