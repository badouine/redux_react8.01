import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
    name: "color",
    initialState: { value: { bgcolor: "white", txtcolor: "black" } },
    reducers: {
        change: (state,action) => {
            state.value = action.payload;
        }
    }
})

export const { change } = colorSlice.actions;
export default colorSlice.reducer;