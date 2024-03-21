import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
    user: false,
    userData: null,
};

console.log(initialState);

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userRegister(state, action) {
            state.user = true;
            state.userData = action.payload.userData;
        },
        userlogout(state) {
            state.user = false;
            state.userData = null;
        },
    },
});

export const { userRegister, logout } = userSlice.actions;

export default userSlice.reducer;
