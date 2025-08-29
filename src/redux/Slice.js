import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    password: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { name, email, password } = action.payload
            state.name = name
            state.email = email
            state.password = password
            
        }
    }
})


export const { setUser } = userSlice.actions;

export default userSlice.reducer