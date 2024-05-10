import { createSlice } from "@reduxjs/toolkit";

interface ToggleState {
    isVisible: boolean;
}

const initialState: ToggleState = {
    isVisible: false
}

const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        toggle: (state) => {
            state.isVisible = !state.isVisible;
        }
    }
})

export const { toggle } = toggleSlice.actions

export default toggleSlice.reducer;