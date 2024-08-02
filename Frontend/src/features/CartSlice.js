import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("cart/getCart", async () => {
    const response = await axios.get("/carts");
    return response.data;
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCart.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.data = null;
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(getCart.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
                state.data = null;
            });
    }
});

export default cartSlice.reducer;