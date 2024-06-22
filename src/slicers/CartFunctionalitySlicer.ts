import { createSlice } from "@reduxjs/toolkit";

type CartFunctionalitySlicerProps = {
    cartItems: []
    alreadAddedItemStatus: Boolean
}

const initialState: CartFunctionalitySlicerProps = {
    cartItems: [],
    alreadAddedItemStatus: false,
    // showAddedCartMessage:false
}

export const CartFunctionalitySlicer = createSlice({
    name: "CartFunctionality",
    initialState,
    reducers: {
        setCart: (state: any, action) => {
            const alreadyAddedItems = state.cartItems.find((itemSlug: any) => itemSlug.slug === action.payload.slug)
            if (alreadyAddedItems) {
                state.alreadAddedItemStatus = true
            }
            else {
                state.alreadAddedItemStatus = false
                state.cartItems = [...state.cartItems, action.payload];
            }
            console.log(state.cartItems)

        },
        setIncOrDecCartItemQuantity: (state: any, action) => {
            console.log(action.payload.incOrDecBy)
            
            state.cartItems = state.cartItems.map((item: any) => {

                if (item.slug === action.payload.item.slug) {

                    if ((item.amount > 1)) {
                        return {
                            ...item,
                            amount: item.amount + action.payload.incOrDecBy,
                        }
                    } else if (item.amount === 1 && action.payload.incOrDecBy === 1) {

                        return {
                            ...item,
                            amount: item.amount + 1,
                        }
                    }
                }
                return item;

            })
        },
        setDeleteItem: (state: any, action) => {
            console.log(action.payload)

            state.cartItems = state.cartItems.filter((deleteCartItems: any) => {
                return action.payload !== deleteCartItems.slug;
            })
        },
        setClearCart: (state: any, action) => {
            state.cartItems = action.payload
        }
    }
})


export const { setCart, setIncOrDecCartItemQuantity, setDeleteItem, setClearCart } = CartFunctionalitySlicer.actions;


export default CartFunctionalitySlicer.reducer
